let fs = require('fs');

let greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

let greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(err, data) {
    console.log(data);
});

console.log('Done!');