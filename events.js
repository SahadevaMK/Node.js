const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

//////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😀");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});

const EventEmitter = require('events');

class Name extends EventEmitter{
  constructor(){
    super()
  }
}
const myemitter = new Name(); 
myemitter.on('sahadeva your name is emitted',()=>{
  console.log('your name sahadeva has been emitted by someone')
})

myemitter.on('sahadeva your name is emitted',(name)=>{
  console.log(`your name sahadeva has been emitted by someone in a jink chack ${name}`)
})

myemitter.emit('sahadeva your name is emitted','ramesha');

const http = require('http')

const server = http.createServer();

server.on('request',(req,res)=>{
  console.log('request recived')
  res.end('request recived')
})

server.on('request',(req,res)=>{
  // console.log('request recived') 
  res.end('another request recived')
})

// server.emit('request')

server.listen(8000,'127.0.0.1',()=>{
  console.log('waiting for requests............')
})

