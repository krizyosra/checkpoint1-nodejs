const http = require('http')
const port = 3000
const fs= require('fs')
const server = http.createServer((req,res)=>{

    res.setHeader('content-type',"html")
   fs.readFile('./index.html', (data, error) => {

    if (error){
        res.end(error)
    }
    else res.end(data)
   })

})
server.listen(port, () => {
console.log('server is run')
})