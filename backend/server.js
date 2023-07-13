const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv')
const user = require('./routes/users')
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1', user)

mongoose.connect('mongodb://127.0.0.1:27017/dummy_db', {
    useNewUrlParser: true
}).then(() => console.log('DB Connected'.bgMagenta.white))
    .catch((err) => {
        console.log('DB Connection Error'.bgRed.white, err)
    })

//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT} Port`.bgCyan.white);
})