 const http = require('http'); 
 const fs = require('fs'); 
 const app = require('express');
 const bodyParser = require('body-parser'); 

const server = http.createServer(function(req, res){
    res.setHeader("Content-type" , 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.writeHead(200, {'Content-Type': 'text/html' }) //Status code of 200 is good
    fs.readFile('sandbox.html',  function(error, data){
        if (error){
            res.writeHead(404)
            res.write('Error: File Not Found')
         } else{
                    res.write(data)

                    var urlencodedParser = bodyParser.urlencoded({ extended: false });

                
                }
                res.end()
            })
        })

  
    
    

    //Code goes here !!!
    

server.listen(3000, function(){
    console.log('Server is now Listening'); 
})