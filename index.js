const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

require('./server/config/mongoose.config')
require('dotenv').config()

app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Importar rutas
require('./server/routes/user.routes')(app)
require('./server/routes/chat.routes')(app)
require('./server/routes/message.routes')(app)

app.listen(port, () => console.log(`Listening on port ${port}`))