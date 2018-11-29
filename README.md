# CSCI215_Lab_09
Ajax and Node.js lab

Name: _______________________________________

## DUE: 4 Dec 2018 @ 11:59 pm

## Instructions:
In this lab we'll create a web server using Node.js and Express. The server will be used to serve up an HTML page along with Javascript and CSS when the request is received. Node.js is the server side Javascript run-time environment and Express is the web application framework for Node.js.  

## Task 1. Set up web server:
  * Download and install [Node.js](https://nodejs.org/en/download/)
  * Navigate to the top level this project and type `npm init`.
    * You can enter your way through all option except **entry point: (index.js)**
    * Change this to **app.js**
  * Type `npm install express --save`
    * This will install express and save the version in package.json
  * Type `npm install body-parser --save`
    * This will allow the server to access data that is received in the request
  * Create a file called **app.js** and place the following code in it:
  ````
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
````
  * Type `node app.js` and verify server is running with your web browser. In the web browser, go to **localhost:3000**
  
## Task 2. Set up routes:
 * Add the following code to your **app.js** file under line 2:
 ````
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require("path");
````
 * Alter the **get** route as follows:
 ````
 app.get('/', function(req, res) {
    console.log('root called. Returning index.html');
    res.sendFile(path.join(__dirname+'/index.html'));
});
````

## Task 3. Setup basic AJAX call:
 *
 
## Task 4:
 
 
## Task 5:


