var express=require('express');
var app=express();
var PORT=8000;

function redirectToIndex(req,res){
  res.sendFile(__dirname+"/index.html");
}

app.use('/assets',express.static('assets'));
app.use('/scripts',express.static('scripts'));
app.use('/views',express.static('views'));
app.use('/data',express.static('data'));

app.get("/",redirectToIndex);
app.get("/home",redirectToIndex);
app.get("/notepad",redirectToIndex);
app.get("/contact",redirectToIndex);
app.get("/about",redirectToIndex);
app.get("/shoplist",redirectToIndex);
app.get("/header.html",function(req,res){
  res.sendFile(__dirname+"/header.html");
});


var server=app.listen(PORT,function(){
  console.log("Listening to port : "+PORT);
});
