const mongoose = require('mongoose')
 
const dbConnector = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS)
        console.log('database conected')
    } catch (error) {
        console.log(error)
        throw new Error('Error when connecting database')
    }
}

module.exports = dbConnector
