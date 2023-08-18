const comment = require('../models/comment')
const Comment = require('../models/comment')
const { validationResult } = require('express-validator')

const creatComment = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ msg: 'invalid data.' })
    }

    const { title, content, email, name, post_id, parent_id } = req.body
    const createdComment = new Comment({
        name, email, title, content, post_id, parent_id
    })

    await createdComment.save()
    res.status(201).json({ comment: createdComment })
}


const deleteComment = async (req, res) => {

    const comment_id = req.params.cid

    await Comment
        .findById(comment_id)
        .deleteOne()


    await Comment
        .deleteMany({ parent_id: comment_id })
        .then((result) => {
            return res.status(200).json({ msg: 'comment deleted.' })
        })


}

const getPostComments = async (req, res) => {

    const post_id = req.params.pid
    const comments = await Comment.find({ post_id: post_id })
    return res.status(200).json({ comments: comments })

}

const getAllComments = async (req, res) => {

    const comments = await Comment.find()
    return res.status(200).json({ comments: comments })

}

exports.creatComment = creatComment
exports.deleteComment = deleteComment
exports.getPostComments = getPostComments
exports.getAllComments = getAllComments