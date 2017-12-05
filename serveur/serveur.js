let http =require('http')
let fs= require('fs')
let url= require('url')

let server=http.createServer()

server.on('request',(req,res)=>{

  res.writeHead(200)

  let query=url.parse(req.url,true).query
let name = query.name=== undefined ? 'anonymous': query.name

  fs.readFile('index.html','utf8',(err,data) =>{
    if (err){
      res.writeHead(404)
      res.end("Ce Fichier n'existe pas")
    }
    else{
      res.writeHead(200,{
        'content-type':'text/html; charset=utf-8'
      })
      data = data.replace('{{ name }}',name)
      res.end(data)
     }
  })
})
server.listen(8080)
