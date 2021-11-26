const express = require('express')
const cors = require('cors')


const dbConector = require('../db/server')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.connectDB()

        this.middlewares()

        this.routes()
    }
    connectDB(){
        dbConector()
    }
    middlewares(){
        this.app.use( express.static('public') )
        this.app.use( cors() )
        this.app.use( express.json() )
    }
    routes(){
        this.app.use('/', require('../routes/main'))
        this.app.use('/session', require('../routes/session'))
        this.app.use('/reaction', require('../routes/reaction'))
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Listening at', this.port)
        })
    }
}

module.exports = Server