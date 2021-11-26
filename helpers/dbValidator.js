const Session = require('../models/Session')

const existId = async(id) => {
    const session = await Session.findById(id)
    if(!session){
        throw new Error('The param id is incorrect')
    }
}

const existNickname = async(nickname) => {
    const existN = await Session.findOne({ nickname })
    if(existN){
        throw new Error('The given nickname already exists.')
    }
}

module.exports = {
    existId,
    existNickname
}