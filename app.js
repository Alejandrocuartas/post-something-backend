require('dotenv').config()

const Server = require('./models/Server')

console.clear()

const app = new Server()

app.listen()