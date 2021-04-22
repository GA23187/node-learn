// var spawn = require('child_process').spawn('ls',['-1h','/user'])
// spawn.stdout.on('data',function(data){
//     console.log('stdout',data.toString())
// })
// spawn.stderr.on('data',function(data){
//     console.log('stderr',data.toString())
// })
// spawn.on('close',function(code){
//     console.log('code',code)
// })

var child_process = require('child_process')
var worker = child_process.fork("worker.js",["arg"])
worker.send({hello: 'child'})
worker.on("message",function(msg){
    console.log('from child',msg)
})