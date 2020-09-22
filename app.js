const http = require('http')
const port = process.env.PORT || 3000
const fs = require('fs')
const express = require('express'); 
const bodyParser = require('body-parser'); 
const nodemailer = require('nodemailer');
const { Console } = require('console');
const app = express(); 
const mysql = require('mysql');
const ejs = require('ejs');  
const { response } = require('express');
var urlencodedParser = bodyParser.urlencoded({extended: false}); 


app.use(express.static('public')); 
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')

// NODE MAILER SECTION 

async function mailerStart(){

    let transporter = nodemailer.createTransport({
      host: "mail.nextlevelup.store",
      port: "465",
      secure: true,
        auth: {
          user: "orders@nextlevelup.store",
          pass: "4LWc8H}qGrC?"
        }
    });
  
  
    let info= {
      from: '"[NEXT-LEVEL-UP]- Online Order" <orders@nextlevelup.store' ,
      to: "leatkins@aboveall-media.tech",
      subject: "::NEW APPOINTMENT REQUEST::",
      html: "<h1>::: NEW ::: Appointment Request</h1><hr><hr><h3>Contact Information</h3><br><hr><p>Company: " + data.company + "</p><p><strong>Customer Name: </strong>" +  data.fname + " " + data.lname + "</p><p><strong>Address: </strong>" +  data.address + " <br> " + data.city + " , " + data.state + " " + data.zipCode + "</p><p><strong>Phone Number: </strong> " + data.phoneNumber + "</p> <p><strong>E-mail Address: </strong> " + data.email + "</p><h4>Requested Appointment Information </h4><hr><p><strong>Date Requested: </strong>"+ data.date +"</p><p><strong>Time Slot Requested: </strong>"+ data.time + "</p><p><strong>Appointment Comments: </strong>" + data.comments + "</p><a href='http://www.aboveall-media.tech/appointments_req.php/'>Appointments Portal</a>"
  
    }
  
    transporter.sendMail(info, function(err, data ){
      if (err){
        console.log("An Error occurred sending the email", err);
      }else {
        console.log("Email sucessfully delivered");
      }
    });
  }




//POSTING DATA TO SERVER


    app.post('/sendRequest', urlencodedParser, function(req, res){
        console.log(req.body); 
        data=req.body;
        console.log("A request for the appointment on " +  data.date + ' & ' +  data.time + ' has been submitted.' )  

        
//MYSQL CONNECTION ~ INSIDE THE POST
var databaseCheck = mysql.createConnection({
    host: 'gator2024.hostgator.com',
    user: 'leatkins_sng_app',
    password: '%GpRD,80#,sH', 
    database: 'leatkins_shinengo'
});

var databaseConnection = mysql.createConnection({
    host: 'gator2024.hostgator.com',
    user: 'leatkins_sng_app',
    password: '%GpRD,80#,sH', 
    database: 'leatkins_shinengo'
    
}); 

databaseCheck.connect(function(err){ 
    console.log("Checking existing records...");
    var sql = "SELECT appointmentDate , time_slot FROM appointments WHERE appointmentDate='"+data.date+"' AND time_slot=' "+data.time+" ';";
    
    databaseCheck.query(sql,function (err, result){
        console.log(result); 
        var checker = result.length; 
        console.log(checker); 
    if (checker >= 1) {
       console.log("There are records found that match the current date and time");
       res.render('sorry');

        
    }else{
        console.log("Collecting data to be stored to database")

        databaseConnection.connect(function(err){
            if (err) throw err; 
            console.log("Connected to Remote Database");
            var sql = "INSERT INTO appointments (company, firstName, lastName, address, city, state, zipCode, phoneNumber, emailAddress, serviceRequested, appointmentDate, time_slot, appointmentStatus, comments) VALUES ('" +data.company+ " ', ' " +data.fname+  " ', ' " +data.lname+  " ', ' " + data.address + " ', ' " + data.city +  " ', ' " + data.state + " ', ' "+ data.zipCode + " ', ' " + data.phoneNumber + " ', ' " + data.email + " ', ' " + data.service + " ', ' "+ data.date + " ', ' " + data.time +" ', 'REQUESTED' , ' "+ data.comments + "')";
            databaseConnection.query(sql, function (err, result){
                if (err) throw err; 
                console.log("1 record inserted into the appointments table");
            });
        });

        res.render('confirm_request#thank_you');
        mailerStart(); 
    } 
    
    });
});




//MYSQL - END



    });

app.get('/' , (req, res) => {
    res.setHeader('Content-Type', 'text/html'); 
    fs.readFile('./index.html', (err, data) =>{
        if (err){
            console.log(err);
            res.end();
            
        }else{
            res.write(data);
            res.end(); 
        }
    }); 
}); 


app.get('/confirm_request' , (req, res) => {
 res.render('confirm_request'); 
 //OTHER ACTIONS FOLLOW HERE

});

app.get('/sorry', (req, res) =>{
    res.render('sorry');
});

app.get('/appointments_view', (req, res) =>{

    var databaseConnection = mysql.createConnection({
        host: 'gator2024.hostgator.com',
        user: 'leatkins_sng_app',
        password: '%GpRD,80#,sH', 
        database: 'leatkins_shinengo'
        
    }); 
     
    databaseConnection.connect(function(err){
        if (err) throw err; 
        console.log("Connected to Remote Database");
        var sql = "SELECT * FROM appointments";
        databaseConnection.query(sql, function (err, result){
            if (err) throw err; 
            console.log("Sucessfully pulled data from database!");
            console.log(result)
           
          
        });
        
    });

    res.render('appointments_view');
})

app.listen(port , () =>{
    console.log('The server is sucessfully running on port:' + port); 
    console.log('The server is now listening for request!!!')
}); 
    
