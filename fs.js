const fs = require('node:fs');


const htmlText = fs.readFileSync('./index.html', 'utf-8');

console.log('The file contains: ');
console.log(htmlText);