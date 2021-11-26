const { response, request } = require('express')

const Session = require('../models/Session')

const commentPost = async(req = request, res = response) => {
    const { comment, nick } = req.body
    const { id } = req.params
    try {
        const session = await Session.findById(id)
        session.comments.push({ nick, comment })
        session.save()
        res.json({
            msg: "comment saved"
        })
    } catch(err) {
        throw new Error('The comment could not be saved.')
    }
}

const commentGet = async(req = request, res = response) => {
    try {
        const { id } = req.params
        const session = await Session.findById(id)
        const comments = session.comments 
        res.json({
            comments
        })
    } catch(err) {
            throw new Error('Could not get the comments.')
    }
}

module.exports = {
    commentGet, 
    commentPost
}