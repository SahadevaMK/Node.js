// FOR SERVER
// in order to build a server we have to do 2 things
// * first crearte server
// * and start the server
// use this inoder to create a server

const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log(pathName)
    if (pathName === '/' || pathName === '/overview'){
        res.end('you are in overview page')
        console.log('server stopped')
    }else if(pathName === '/products'){
        res.end('you are in product page')
    } else{
    res.end('hello from server')
    }
});

server.listen(8000,'127.0.0.1',() =>{
    console.log("listen at port no 8000")
})
