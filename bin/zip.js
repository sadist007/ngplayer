var jsonfile = require('jsonfile');
var mkdirp = require('mkdirp');
var zipFolder = require('zip-folder');


mkdirp("../_dist", function (err) {
					    if (err) {console.error(err)}
					    else {console.log('Dir created -> EXCELLENT')}
					});

var file = '../package.json';
var VERSION = '';
var PKG = '';

jsonfile.readFile(file, function(err, obj) {
	if(err) {
				console.log('Error', err);
	    } else {

	        console.log('readFile package.json -> EXCELLENT');

	        VERSION = obj.version;
	        PKG = obj;

	        var file3 = 'data.json';
					jsonfile.readFile(file3, function(err, obj) {

						if (err) {console.error(err)}
				    else {
				    	console.log('readFile version.json -> EXCELLENT');

				    	var file3 = '../src/version.json'
var obj2 = {
"Component name":PKG.name,
"Component version":PKG.version,
"Build timestamp":obj.date,
"Git commit hash":obj.SHA
}

	        jsonfile.writeFile(file3, obj2, function (err) {
					  console.error(err)
					})

var fileName = '';
if(process.argv[3] == 'prerelease'){
	var d = obj.date;
	var array = d.split(' ');
	fileName = 'wp' + PKG.name + '-' + PKG.version + '-' + array[0].replace(/-/g, "") + '-' + array[1].substr(0,array[1].lastIndexOf(":")).replace(/:/g, "");
}
else{
	var d = obj.date;
	var array = d.split(' ');
	fileName = 'wp' + PKG.name + '-' + PKG.version;
}

							  zipFolder('../src/', '../_dist/'+ fileName +'.zip', function(err) {
							    if(err) {
										console.log('Error', err);
							    } else {
							        console.log('zip created -> EXCELLENT');
							    }
								});

				    	}
					})
	    }

});
