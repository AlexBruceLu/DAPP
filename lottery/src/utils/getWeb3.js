var Web3 = require('web3');
var web3;

// 尝试连接web3，如果网页没有web3，就尝试连接本地web3服务
if (typeof window.web3 === 'undefined') {
	console.log('local web3 found!');
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}else {
	web3 = new Web3(window.web3.currentProvider);
	console.log('injected web3 found!');
}

export default web3;