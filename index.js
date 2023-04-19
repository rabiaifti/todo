const express = require('express');
var bodyParser = require('body-parser')

const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
const request = require("request")
app.use(express.static(__dirname+"/public"))


var itemarr = [];
var workarr = [];
app.get("/",function(req,res){

    var options = { weekday: 'long', day: 'numeric', month: 'long' };
var today  = new Date();


var toDay = (today.toLocaleDateString("en-IN", options))
 
    res.render("app",{kindofDay:toDay ,newListItem : itemarr , buttonValue: "home"} )
    
 })

 app.post("/",function(req,res) {
    console.log(req.body)
    var page = req.body.button
    if(page === "home"){
        var item = req.body.option;
        
        itemarr.push(item); 
        res.redirect("/")

    }else if(page === "work"){
        var item = req.body.option;
        workarr.push(item); 
        res.redirect("/work")
    }


 })

 app.get("/work",function(req,res){
 
    res.render("app",{kindofDay:"Work page" ,newListItem : workarr, buttonValue: "work", } )
    
 })





























// var date = new Date()
// var day = date.getDay()



// if (day == 7  || day == 6){
//     weekday =  "weekend"
// }else{
//     weekday = "weekDay"  
// }

// switch (day) {
//     case 1:
//         weekday = "Monday"
//         break;
//         case 2:
//         weekday = "Tuesday"
//         break;
//         case 3:
//         weekday = "Wednesday"
//         break;
//         case 4:
//         weekday = "Thursday"
//         break;
//         case 5:
//         weekday = "Friday"
//         break;
//         case 6:
//         weekday = "Saturday"
//         break;

//     default:
//         weekday = "Sunday"
//         break;
// }







app.listen(3333, function () {
    console.log("server started")
    
})