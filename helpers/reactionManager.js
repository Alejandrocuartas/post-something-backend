const Session = require('../models/Session')

const reactionManager = async(req, res, doUndo) => {
    try {
        const { id } = req.params
        const { reaction } = req.body
        const session = await Session.findById(id)
        if(reaction === 'care'){
            if(doUndo === 'undo'){
                session.reactions[0].number = session.reactions[0].number - 1
            }else{
                session.reactions[0].number = session.reactions[0].number + 1
            }
            if(session.reactions[0].number < 0){
                session.reactions[0].number = 0
            }
        } else 
        if(reaction === 'sad'){
            if(doUndo === 'undo'){
                session.reactions[1].number = session.reactions[1].number - 1
            }else{
                session.reactions[1].number = session.reactions[1].number + 1
            }
            if(session.reactions[1].number < 0){
                session.reactions[1].number = 0
            }
        } else
        if(reaction === 'happy'){
            if(doUndo === 'undo'){
                session.reactions[2].number = session.reactions[2].number - 1
            }else{
                session.reactions[2].number = session.reactions[2].number + 1
            }
            if(session.reactions[2].number < 0){
                session.reactions[2].number = 0
            }
        } else {
            res.json({
                msg: 'Incorrect reaction at body'
            })
        }
        res.json({
            msg: 'reaction saved.'
        })
        session.save()
    } catch (error) {
        throw new Error('Could not save the reaction')
    }
}

module.exports = reactionManager