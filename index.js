//Copyright Sagi Fridman//
var http = require('http');
var EventEmitter=require('events');
var operation=require('./operation.js');
var bikeConfig=require('./bikeConfig.js').events;

var rider=new operation("Lior",20);
var log = "";
rider.on(bikeConfig.ADD,()=>// ES6 function
{
     let str = ('Rotations has been changed+1 the name of the athlete: '+rider.name +'major: '+rider.sport +'num of Rider: '+rider.rider_bike);

    console.log (str);
    log += str +'\n';
});

rider.on(bikeConfig.MINUS,()=>// ES6 function
{
    
    let str = ('Rotations has been changed-1 the name of the athlete: '+rider.name +'major: '+rider.sport +'num of Rider: '+rider.rider_bike);    
    console.log (str);
    log += str +'\n';
  
});

http.createServer((req,res)=> // ES6 function
{
    res.writeHead(200);
    rider.add();
    rider.minus();
    res.write(log);
    res.end();
}).listen(8080);
console.log('listening to port 8080');

