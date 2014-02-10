var fs = require('fs');
var fileName = process.argv[2];
var output = '';

var alphabet = {
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z',
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9'
};


function morseToString(text) {
	var result = '';
	var words = text.split('  ');

	words.forEach(function(word) {
		var letters = word.split(' ');

		letters.forEach(function(letter) {
			result += alphabet[letter];
		});

		result += ' ';
	});

	console.log(result.slice(0, result.length - 1));
}

fs.readFile(fileName, 'utf-8', function(error, data) {
	var lines = data.split('\n');

	lines.forEach(function(line) {
		morseToString(line);
	});
});

