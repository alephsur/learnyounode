var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var stringContent = buffer.toString();


console.log(stringContent.split("\n").length -1);