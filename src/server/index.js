var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require('aylien_textapi');
const bodyParser = require('body-parser');
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();


// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });

const app = express()

app.use(cors())
// to use json
app.use(bodyParser.json())  

// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: false
  }))


app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('server running');
    console.log('app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



app.post('/testing', async (req, res) => {


    textapi.sentiment({
        'text': req.body.url
    }, function (error, response) {
        if (error) {
            console.log({ error }); 
        }else{
            console.log(response);
            console.log('successful')          
              res.send(response);
        }
    });


})


