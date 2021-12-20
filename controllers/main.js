const { request, response } = require('express')

const Session = require('../models/Session')

//returns all sessions
const getCtrl = async(req = request, res = response) => {
    const sessions = await Session.find() 
    res.json({
        sessions
    })
}

//save a new session 
const postCtrl = async(req = request, res = response) => {
    try {
        const { content, nickname } = req.body
        const newSession = new Session({ content, nickname })
        await newSession.save()
        res.json({
            msg: "Session saved."
        })
    } catch (error) {
        return new Error('The Session could not be saved')
    }
}

module.exports = {
    getCtrl,
    postCtrl
}