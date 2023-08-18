const mongoose = require('mongoose')

const schema =  mongoose.Schema

const postScheam = new schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    date:{type:Date, default: Date.now},
    tags:[{type:String}]
})


module.exports =  mongoose.model('Post',postScheam)