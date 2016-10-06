var myModule = require("./myModule.js");

myModule(process.argv[2],process.argv[3],function(err,data){
    data.forEach(function(item){
        console.log(item);
    });
});