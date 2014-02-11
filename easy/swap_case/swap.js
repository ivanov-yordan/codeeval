var fs = require('fs');
var text = fs.readFileSync(process.argv[2], 'utf-8').split('');

for(var i = 0; i < text.length; i++) {
	var charCode = text[i].charCodeAt(0);

	if(charCode >= 97 && charCode <= 122) {
		text[i] = String.fromCharCode(charCode - 32);
	} else if(charCode >= 65 && charCode <= 90) {
		text[i] = String.fromCharCode(charCode + 32);
	}
}

process.stdout.write(text.join(''));