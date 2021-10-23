var express = require('express');
var request = require("request");
var https = require('https');
var app = express();
var port = process.env.PORT || 80

app.use(express.json());

app.post("/ProxyGet", function(Request, Res){
    if (!Request.body.url){
        Res.send("No url provided")
        return
    }

    var URL = Request.body.url
    request(URL).pipe(Res)
});

app.listen(port, () => {
  console.log("Server Loaded.");
});
