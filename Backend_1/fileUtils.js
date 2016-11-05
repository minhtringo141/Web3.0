var fs = require('fs');

module.exports.readFile = function(file, done) {
    fs.readFile(file, function(err, logData) {
        var res = {};
        var data = logData.toString();
        var temp = data.split("\n");
        for (var i = 0; i < temp.length; i++) {
            var temp2 = temp[i].split(" ");

            if (temp2[1] in res) {
                res[temp2[1]] += parseInt(temp2[2]);
            } else {
                res[temp2[1]] = 0;
                res[temp2[1]] += parseInt(temp2[2]);
            }
        }
        done(null, res);
    });


}

// Task 1
module.exports.writeFile = function(fileIn, fileOut, err) {
    fs.readFile(fileIn, function(err, logData) {
        var res = {};
        var data = logData.toString();
        var temp = data.split("\n");
        for (var i = 0; i < temp.length; i++) {
            var temp2 = temp[i].split(" ");

            if (temp2[1] in res) {
                res[temp2[1]] += parseInt(temp2[2]);
            } else {
                res[temp2[1]] = 0;
                res[temp2[1]] += parseInt(temp2[2]);
            }
        }

       
        for (key in res) {
            if (res.hasOwnProperty(key)) {
                fs.appendFile(fileOut, key + " " + res[key] + "\n");
            }
        }
    });
}



// Task 2

module.exports.readMultiFile = function(files, done){ 
	var res = {};
	for( var j = 0; j < files.length; j++){
		fs.readFile(files[j], function(error, logData){
			var data = logData.toString();
	        var temp = data.split("\n");
	        for (var i = 0; i < temp.length; i++) {
	            var temp2 = temp[i].split(" ");

	            if (temp2[1] in res) {
	                res[temp2[1]] += parseInt(temp2[2]);
	            } else {
	                res[temp2[1]] = 0;
	                res[temp2[1]] += parseInt(temp2[2]);
	            }
	        }
	        done(null, res);
	    });
	}

	

}

