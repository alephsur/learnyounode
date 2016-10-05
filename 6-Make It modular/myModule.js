var fs = require("fs");
var path = require("path");

module.exports = function(ruta, ext){
    fs.readdir(ruta, function(err,list){
        list.forEach(function(file){
            if(path.extname(file) === "." + ext){
                console.log(file);
            }
        });
    });    
}



