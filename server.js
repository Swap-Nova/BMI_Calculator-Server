const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.use(express.static(__dirname + '/styles.css'));

app.post("/",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height*height).toFixed(2);
    
    res.send("BMI is: "+bmi);
})

app.listen(3000,function(){
    console.log("Server started at port 3000.");
})