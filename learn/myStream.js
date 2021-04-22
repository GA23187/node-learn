var readable = require('stream').Readable
var util =  require('util')

util.inherits(MyReadable,readable)

function MyReadable(array){
    readable.call(this,{objectMode: false})
    this.array = array
}
MyReadable.prototype._read= function(){
    if(this.array.length){
        this.push(this.array.shift())
    }else {
        this.push(null)
    }
}

const array = ['a','b','c']
const read = new MyReadable(array)
read.on('data',function(data){
    console.log(data)
})
read.on('error',function(){
    console.log('error')
})
