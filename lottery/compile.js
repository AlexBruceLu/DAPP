var solc = require('solc');
var fs = require('fs');

var source = fs.readFileSync('./contracts/lottery.sol', 'utf-8');
var output = solc.compile(source,1);

console.log('output: ',output);