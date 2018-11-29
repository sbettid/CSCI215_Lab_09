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
 * On the same level as **app.js** create an HTML file named **index.html** and put the folling text in:
 ````
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My home page from route</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>

<form action="javascript:void(0);">
    First name: <input id="firstname" type="text" name="fname"><br>
    Last name: <input id="lastname" type="text" name="lname"><br>
    <input id="submitButton" type="submit" value="Submit">
</form>
<div id="myDiv"></div>

</body>

</html>
````
 * Restart the node server. Test to ensure the **index.html** file is being displayed in the browser.
 
**Note: We will be using jquery for our AJAX calls**
## Task 3. Setup basic AJAX call:
**Note: To reduce complexity, we are going to put our Javascript and jquery in a \<script\> tag**
 * Add the following code after \</body\> tag:
 ````
<script>
    $("#submitButton").click(function(){
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;

        $.post("/myPost",
            {
                firstname: firstName,
                lastname: lastName
            },
            function(data, status){
                alert("Data: " + data.testdata + "\nStatus: " + status);
            });
    });
</script>
````
 * Add a post route called **myPost** in **app.js**
 ````
 app.post('/myPost', function(req, res) {
    console.log('post called. Returning data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    res.json({"testdata" : "This is data."});
});
````
 * Restart the node server. Test form to ensure that first and last names are being written to server console and a test data alert pops up on web browser.
 
## Task 4. Adjust JSON:
 * Adjust the payload that is returned from /myPost route to return a JSON object that has key of fullname and the value is a concatanation of the firstname and lastname values that come in with the request.
 * Ajust the AJAX callback function to populate the **myDiv** tag with the fullname rather than alert pop up.
 
 
## Task 5. Incorporate the form from Lab 6:
 * In order to return files along with the HTML create a directory called **public** and move **index.html** into it.
 * In **public** directory, create a file called **execute.js** and cut/paste your Javascript code into it.
 * Add the following line in **add.js**
 ````
 app.use(express.static("public"));
 ````
 * Add the **src** attribute in the HTML file to run your Javasctipt file.
 * Refactor lab to use the form in Lab 6. You will need to change the action in Lab 6 version to **action="javascript:void(0);"**  
