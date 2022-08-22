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

app.post("/Webhook", function(Request, Res){
  if (!Request.body.content){
      Res.send("No content provided")
      return
  }
  if (!Request.body.url){
      Res.send("No url provided")
      return
  }

  var URL = Request.body.url
  var CONTENT = Request.body.content

  console.log(URL)
  console.log(CONTENT)

  var j = {
    "content": CONTENT
  }

  request.post({
    "headers": {'content-type' : 'application/json'},
    "url": URL,
    "body": JSON.stringify(j)
  });
});

app.listen(port, () => {
  console.log("Server Loaded.");
});
