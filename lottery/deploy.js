let Web3 = require('web3');
let {interface,bytecode} = require('./compile');
let web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));

// deploy = async () => {
// 	try{
// 		accounts = await web3.eth.getAccounts();
// 		contractInstance = await new web3.eth.Contract(JSON.parse(interface)).deploy(
// 			{
// 				data: bytecode,
// 			}
// 		).send({
// 			from: accounts[0],
// 			gas: '1000000',
// 		})
// 		console.log('address: ',contractInstance.options.address);
// 	}catch(e){
// 		console.log(e);
// 	}
// }

// deploy();

console.log('version: ',web3.version);
console.log('provider: ',web3.currentProvider);
deploy = async () => {
	var contract = await new web3.eth.Contract(JSON.parse(interface));
	// console.log('1111',contract);
	var contractInstance = await contract.deploy({
		data: bytecode,
		// arguments: ['helloWorld'],
	}).send({
		from: '0xf500e377400a8ce9c4789cd10a87ca2d265d3c56',
		gas: 1000000,	
	});
	// console.log('222222222222222222222222222222   ',contractInstance);
	console.log('address: ',contractInstance.options.address);
}

deploy();