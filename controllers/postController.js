
const Post = require('../models/post')
const {validationResult} = require('express-validator')

const getPostById = async (req,res)=>{
    const postId = req.params.pid
    const post = await Post.findById(postId)
    res.json({post})
}

const createPost =async (req,res)=>{
    
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        
        return res.status(422).json({msg:'invalid data.'})
    }
    const {title,content,tags} = req.body
    const createdPost = new Post({title,content,tags})
    await createdPost.save()


    res.status(201).json({post:createdPost})
}

const deletePost = async (req,res)=>{
    const pid = req.params.pid
    const post = await Post.findById(pid)
    await post.deleteOne()

    return res.status(200).json({msg:'post deleted.'})
}

exports.getPostById = getPostById
exports.createPost = createPost
exports.deletePost = deletePost
