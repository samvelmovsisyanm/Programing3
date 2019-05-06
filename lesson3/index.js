var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/google/:google", function(req, res){
   var google = req.params.google.com;
   res.redirect(google) 
}); 
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
