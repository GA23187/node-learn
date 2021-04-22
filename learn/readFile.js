var fs = require('fs')
// var rs = require('fs').createReadStream('test.txt',{highWaterMark: 10})
fs.readFile('test.txt', {encoding: 'utf-8'},function(err,data){
	if(err) throw err;
	console.log(data)
	// console.log(data.toString("ASCII"))
})

// var data = fs.readFileSync('test.txt',{encoding: "UTF-8"})
// console.log(data)


// var data = ''
// var data = []
// rs.on("data",function(chunk){
// 	console.log(chunk.toString())
// 	data.push(chunk) // data += chunk
	
// })
// rs.on("end",function(){
// 	console.log('data',data)
// 	var buf = Buffer.concat(data)
// 	console.log(buf.toString())
// })