let solc = require('solc');
let fs = require('fs');

let source = fs.readFileSync('./contracts/lottery.sol', 'utf-8');
let output = solc.compile(source,1);

// console.log('output: ',output);

module.exports = output['contracts'][':Lottery'];
// console.log(module.exports);