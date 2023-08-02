const { log } = require('console')
const fs = require('fs') // fs here stands for file systems and using this module we get acces to reading and writing data to file system   
// this is an module which returns an object with lots of functionalities and can be used further


//synchronous
const text = fs.readFileSync('./starter/txt/input.txt','utf-8')
// console.log(text)

//synchrounous in write
const textinput = `this is what we read in   ${text}\n ${Date.now()}\n thank you`
const output = fs.writeFileSync('./starter/txt/output.txt',textinput)
// console.log(output)

// non blocking async
fs.readFile('./starter/txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./starter/txt/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log (data2)
        fs.readFile('./starter/txt/append.txt','utf-8',(err,data3)=>{
            console.log(data3)
            const data4 = data2+data3
            fs.writeFile('./starter/txt/chack.txt',`${data2}\n ${data3}`,'utf-8',(err)=>{
                if (err) throw err
                console.log('you file has been written')
            })
        })
    })
})

console.log('reading file.......')
