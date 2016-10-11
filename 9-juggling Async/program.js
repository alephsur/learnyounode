var http = require("http");

http.get(process.argv[2],function(responseUrl1){

    var dataUrl1 ="";
    var dataUrl2 ="";
    var dataUrl3 ="";

    responseUrl1.on("data",function(data){
        dataUrl1 +=data;
    })

    responseUrl1.on("end",function(){
        console.log(dataUrl1);
        http.get(process.argv[3],function(responseUrl2){
            responseUrl2.on("data",function(data){
                dataUrl2 +=data;
            });
            responseUrl2.on("end",function(){
                console.log(dataUrl2);
                http.get(process.argv[4],function(responseUrl3){
                    responseUrl3.on("data",function(data){
                        dataUrl3 +=data;
                    });
                    responseUrl3.on("end",function(){
                        console.log(dataUrl3);
                    });
                });                
            });
        });
    });
});


/*ELEGANT SOLUTION
 ────────────────────────────────────────────────────────────────────

     var http = require('http')
     var bl = require('bl')
     var results = []
     var count = 0

     function printResults () {
       for (var i = 0; i < 3; i++)
         console.log(results[i])
     }

     function httpGet (index) {
       http.get(process.argv[2 + index], function (response) {
         response.pipe(bl(function (err, data) {
           if (err)
             return console.error(err)

           results[index] = data.toString()
           count++

           if (count == 3)
             printResults()
         }))
       })
     }

     for (var i = 0; i < 3; i++)
       httpGet(i)

*/