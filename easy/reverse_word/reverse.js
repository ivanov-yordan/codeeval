var fs = require('fs');
var lines = fs.readFileSync(process.argv[2], 'utf-8').split('\n');

lines.forEach(function(line) {
	process.stdout.write(line.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ').split(' ').reverse().join(' ') + '\n');
});