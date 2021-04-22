const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
// 请求会从当前目录下static/html里找
// 第二个参数限定了html后缀
// 如http://localhost:3000/test 会找到static/html/test.html

app.use(serve(__dirname+"/static/html",{extensions: ['txt','html']}))
app.listen(3000,()=>{
    console.log('server run! listen on 3000')
})