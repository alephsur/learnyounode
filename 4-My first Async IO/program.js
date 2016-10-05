
var fs = require('fs');

var string = fs.readFile(process.argv[2],function(err, file){
    if(err){
        console.log("se ha producido un error");
        return null;
    }
    else{
        var stringContent = file.toString();
        console.log(stringContent.split("\n").length -1);
    }
});

