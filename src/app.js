const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
// const bodyParser = require('body-parser')
const router = require('./router/route')
require('./model/schema')
// app.use(bodyParser.urlencoded({ extended: false }));
const app = express();
const port = process.env.PORT || 3000

app.use(router);
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kevalrabadiya:keval123@worldcup2022.xgjorig.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log('Database connected')
}).catch((e) => console.log(e))

app.listen(port, (req, res) => {
    console.log(`Connection Sucesssfull on ${port} 😊😊`);
})