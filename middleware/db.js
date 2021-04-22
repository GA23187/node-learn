const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/blog')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.info('we are connected!');
});


var loginSchema = new mongoose.Schema({
    username:String,
    password:String
});
var login = db.model("login",loginSchema,"login");



var blogListSchema = new mongoose.Schema({
    title:String,
    kind:String,
    id:String
});
var blogList = db.model("blogList",blogListSchema,"blogList")

var blogSchema = new mongoose.Schema({
    content:String,
    id:String
});
var blog = db.model("blog",blogSchema,"blog")




async function validateLogin(username,password){
    //var pass = '';
    //await login.find({username:username}).then(function(doc){
    //      pass = doc[0].password;
    // })
    //if(password === pass){
    //    return true;
    //}
    //return false;

    return true;
}

//查询某个分类下的所有文章
async function getBlogList(kind){
    let query = {};
    let results = [];
    if(kind!='/'){
        query = {kind:kind}
    }
    await blogList.find(query).then(function(doc){
        results = doc;
    });
    return results;
}

//查询数据库中最大ID值
async function queryMaxID(){
    let temp = 0;
    await  blogList.find({}).sort({'id':-1}).limit(1).then(function(doc){
       if(doc.length>0){
           temp = doc[0].id
       }else{
           console.log("collection is empty");
       }
    });
    return temp;
}

// 删除文章
async function deleteBlogId(id){
    let query = {id:id};
    console.log(query);
    await blogList.remove(query).then(function(doc){
        console.log("done");
    });
}

// 修改文章分类
async function modifyBlogKind(id,kind){
    let query = {id:id};
    await blogList.findOneAndUpdate(query,{kind:kind}).then(function(doc){
        console.log("done");
    });
}

// 文件（文章）上传成功写入数据库
async function saveBlog(path,id){
    var content = require("fs").readFileSync(path,{encoding:"UTF-8"})
    var query = new blog({content:content,id:id});
    query.save(function(err){
        if(err) return;
        console.log("save done");
    })
}

// 更新文章列表
async function insertBlogList(title,kind){
   let value =  await queryMaxID();
    var record = new blogList({title: title, kind: kind, id: ++value});

    await record.save().then(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Insert done");

    });
    return value;
}

// 打开某一篇文章
async function readBlog(id){
    let content;
    await blog.find({id:id}).then(function (doc) {
        content = doc[0];
    })
    return content;
}

var dbAPI = {
    validate:validateLogin,
    getBlogList:getBlogList,
    insertBlogList:insertBlogList,
    deleteBlogId:deleteBlogId,
    modifyBlogKind:modifyBlogKind,
    saveBlog:saveBlog,
    readBlog:readBlog
}

module.exports = dbAPI;