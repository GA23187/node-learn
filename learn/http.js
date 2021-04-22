var http = require('http')
http.createServer(function(req,res){
    console.log(req.url)
    if(req.method =="POST"){
        res.end('post')
    }else if(req.method == "GET"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.write('213')
        res.end('get')
    }

}).listen(3000,function(){
    console.log('端口: 3000','listening')
})