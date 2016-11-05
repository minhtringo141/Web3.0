var fs = require('fs');
var fileUtils = require("./fileUtils");
var fileInput = process.argv[2];
var fileOutput = process.argv[process.argv.length - 1];

if (fileInput) {
    fileUtils.readFile(fileInput, function(err, data) {
        // console.log(data);
    });

}


// Task 1
if (fileInput && fileOutput) {
    fileUtils.writeFile(fileInput, fileOutput, function(err) {
        // console.log(err);
    });
}


// Task 2
var inputFileArray = [];
for (var i = 2; i < process.argv.length - 1; i++) {
    inputFileArray.push(process.argv[i]);
}

var result = [];
if (fileInput && fileOutput) {
    fileUtils.readMultiFile(inputFileArray, function(err, data) {
    	var content = "";

    	for (key in data){
    		if(data.hasOwnProperty(key)){
    			var temp = key + " " + data[key] + "\n";
    			content += temp;
    		}
    	}
    	fs.writeFile(process.argv[process.argv.length-1], content, function(err){
            if(err){
                console.error(err);
            }
        });

    
	});	

}
