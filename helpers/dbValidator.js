const Session = require('../models/Session')

//validates that the id is an unique id
const existId = async(id) => {
    const session = await Session.findById(id)
    if(!session){
        throw new Error('The param id is incorrect')
    }
}
//validates that the nickname given is unique
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