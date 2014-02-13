var fs = require('fs');
var lines = fs.readFileSync(process.argv[2], 'utf-8').split('\n');

lines.forEach(function(line) {
	var newLine = [];

	line.split(' ').forEach(function(word) {
		newLine.push(word.slice(0,1).toUpperCase() + word.slice(1));
	});

	process.stdout.write(newLine.join(' ') + '\n');
});