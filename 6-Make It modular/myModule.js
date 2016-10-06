var fs = require("fs");
var path = require("path");

module.exports = function(ruta, ext, callback){
    fs.readdir(ruta, function(err,list){
        if(err)
            return callback(err, null); 
        var result=[];

        list.forEach(function(file){
            if(path.extname(file) === "." + ext){
                result.push(file);
            }
        });
        return callback(null,result);
    });    
}



