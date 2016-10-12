var http = require("http");

var listener = http.createServer(function(request,response){
    
    if(request.method === "POST"){
        request.on("data",function(data){
            response.write(data.toString().toUpperCase());
        }); 
    }
});

listener.listen(process.argv[2]);


/*
 ─────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/