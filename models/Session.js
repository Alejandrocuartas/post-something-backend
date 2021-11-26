const { Schema, model } = require('mongoose')

const reactionSchema = new Schema({
    reaction: String,
    number: Number
})

const commentSchema = new Schema({
    nick : String,
    comment: String
})

const SessionSchema = new Schema({
    nickname: {
        type: String,
        required: [true, 'The nickname is required'],
        unique: true
    },
    content: {
        type: String,
        required: [true, 'The content of the session cannot be empty']
    },
    reactions: {
        type: [reactionSchema],
        default: [
            {
                reaction: 'care',
                number: 0
            },
            {
                reaction: 'sad',
                number: 0
            },
            {
                reaction: 'happy',
                number: 0
            },
        ]
    },
    comments: {
        type: [commentSchema]
    }
})



module.exports = model('session', SessionSchema)