const mongoose = require('mongoose')


const schema = mongoose.Schema


const commentSchema = new schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    title:{type:String,require:true},
    content:{type:String,require:true},
    post_id:{ type: schema.Types.ObjectId, ref: 'Post' },
    parent_id:{type: schema.Types.ObjectId},
    date:{type:Date, default: Date.now}
})

module.exports = mongoose.model("Comment",commentSchema)