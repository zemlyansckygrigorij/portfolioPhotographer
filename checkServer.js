var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
 
var app = express();
var jsonParser = bodyParser.json();

 app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
// получение отправленных данных
app.post("/", jsonParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    res.send("success");
});


  
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});