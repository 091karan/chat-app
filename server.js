var app = require('express')();
var http = require('http').server(app);

app.get("/",function(req,res){
    res.send('<h1>Hello World</h1>');
});

http.listen(3000,function(){
    console.log("listening on port 3000");
})