var http = require("http");
var fs = require("fs");

var listener = http.createServer(function(request,response){
    stream = fs.createReadStream(process.argv[3]);
       
    stream.pipe(response);
});

listener.listen(process.argv[2]);