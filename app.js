var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require("path");

app.get('/', function(req, res) {
    console.log('root called. Returning index.html');
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/myPost', function(req, res) {
    console.log('post called. Returning data');

    var returnedString = 'DATA RECEIVED BY THE SERVER';
    returnedString += '<br> <br><p>';
    returnedString  += 'Full name: ' + req.body.name + '<br>';
    returnedString  += 'Email: ' + req.body.email + '<br>';
    returnedString  += 'Age: ' + req.body.age + '<br>';
    returnedString  += 'Apartment farming skills: ' + req.body.skill + '<br>';
    returnedString  += 'Refer: ' + req.body.refer + '<br>';
    returnedString  += 'Additional comments: ' + req.body.comments + '<br> </p>';

    console.log(returnedString);


    res.json({"parsedData" : returnedString });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});