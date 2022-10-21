// #STEPS IN INSTALLING EXPRESS\
// mkdir myapp
// cd myapp

// npm init

//create repository

// npm install express
// add gitignore
//bb11c58259a62ec9cd004cad3b2e6f9d API KEY


const express = require('express')
const https = require('node:https');

const app = express()
const port = 3000



app.get('/', (req, res) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=bb11c58259a62ec9cd004cad3b2e6f9d";
  https.get(url, function(response){
    console.log(response);
  });
  res.send('Server is running') 
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
