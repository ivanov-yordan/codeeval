var fs = require('fs');
var lines = fs.readFileSync(process.argv[2], 'utf-8').split('\n');

lines.forEach(function(line) {
	var patterns = line.split(' ');
	var sign = '';
	var expressions = [];
	var splitIndex = 0;

	if(patterns.length > 1) {
		splitIndex = patterns[1].indexOf('+');
		if(splitIndex !== -1) {
			sign = '+';
		} else {
			sign = '-';
			splitIndex = patterns[1].indexOf('-');
		}

		expressions.push(patterns[0].substring(0, splitIndex));
		expressions.push(patterns[0].substring(splitIndex));

		var result = 0;
		if(sign === '+') {
			result = (expressions[0] * 1) + (expressions[1] * 1);
		} else {
			result = (expressions[0] * 1) - (expressions[1] * 1);
		}

		process.stdout.write(result + '\n');
	}
});