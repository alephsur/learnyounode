var net = require("net");
var strfmt = require("strftime");


var listener = net.createServer(function(socket){
    var fecha = new Date();
    var time = strfmt('%F %H:%M',fecha);
    
    socket.end(time + "\n");
});

listener.listen(process.argv[2]);