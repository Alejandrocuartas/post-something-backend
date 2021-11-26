const { request, response } = require('express')

const Session = require('../models/Session')

const reactionManager = require('../helpers/reactionManager')

const reactionGet = async(req = require, res = response) => {
    try {
        const { id } = req.params
        const session = await Session.findById(id)
        const reactions = session.reactions
        res.json({
            reactions
        })
    } catch(err) {
        throw new Error('Could not get reactions')
    }
}

const reactionPost = async(req = require, res = response) => {
    await reactionManager(req, res, 'do')
}

const reactionDelete = async(req = require, res = response) => {
    await reactionManager(req, res, 'undo')
}


module.exports = {
    reactionGet,
    reactionPost,
    reactionDelete
}