var Web3 = require('web3');
var {interface,bytecode} = require('./compile');
// var web3 = new Web3();
// web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545')); //私有网络部署

var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'sting pig good leg claw witness switch sibling assume surge segment hawk';
var provider = new HDWalletProvider(mnemonic,'https://ropsten.infura.io/v3/0c5480ee2dca44e98ad89ecd2bc0288d');
var web3  = new Web3(provider);

deploy = async () => {
	try{
		accounts = await web3.eth.getAccounts();
		// console.log(accounts);
		contractInstance = await new web3.eth.Contract(JSON.parse(interface)).deploy(
			{
				data: bytecode,
			}
		).send({
			from: accounts[0],
			gas: '1000000',
		})
		console.log('address: ',contractInstance.options.address);
	}catch(e){
		console.log(e);
	}
}

// deploy();

// console.log('version: ',web3.version);
// console.log('provider: ',web3.currentProvider);
// deploy = async () => {
// 	var contract = await new web3.eth.Contract(JSON.parse(interface));
// 	// console.log('1111',contract);
// 	var contractInstance = await contract.deploy({
// 		data: bytecode,
// 		// arguments: ['helloWorld'],
// 	}).send({
// 		from: '0x7c81f821d13f3db90d9dd36d15b419b4e8f23063',
// 		gas: 1000000,	
// 	});
// 	// console.log('222222222222222222222222222222   ',contractInstance);
// 	console.log('address: ',contractInstance.options.address);
// }

deploy();