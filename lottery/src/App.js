import React, { Component } from 'react';
import CardExampleCard from './ui/display'
import web3 from './utils/getWeb3';
import lotteryContract from './eth/contract';

class App extends Component {
	//state //类内部传递数据
    //props //函数之间传递数据
    constructor(props) {
    	super(props);
    	// react 内置变量
    	this.state = {

    		manager: '',
    		currentAccount: '',
    		players: [],
    		winner: '',
    		round: 0,
    		playersCount: 0,
    		balance: 0, // 单位是wei
    		isPlaying: false, // 标志按钮的状态
    		isDrawing: false,
    		isDrawingBack: false,
    		buttonControl: '', // 管理员inline，普通用户none

    	}
    }

    async componentDidMount() {

    	var accounts = await web3.eth.getAccounts();

    	var manager = await lotteryContract.methods.manager().call({from: accounts[0]});
    	var players = await lotteryContract.methods.getPlayers().call({from: accounts[0]});
    	var winner = await lotteryContract.methods.winner().call({from: accounts[0]});
    	var round = await lotteryContract.methods.round().call({from: accounts[0]});
    	var playersCount = await lotteryContract.methods.getPlayersCount().call({from: accounts[0]});
    	var balance = await lotteryContract.methods.getAllBalance().call({from: accounts[0]});

    	this.setState({

    		manager,
    		currentAccount: accounts[0],
    		players,
    		winner,
    		round,
    		playersCount,
    		balance: web3.utils.fromWei(balance,'ether'),

    	})

    	if (manager === accounts[0]) {
    		this.setState({buttonControl: 'inline'});
    	} else {
    		this.setState({buttonControl: 'none'});
    	}

    }

    play = async () => {

    	// 判断是否已经点击，如果已经点击，但是还没有处理完成，不允许再次点击
    	this.setState({isPlaying: true});

    	// 调用合约 paly 方法
    	try {

    		var accounts = await web3.eth.getAccounts();
    		await lotteryContract.methods.play().send({
    			from: accounts[0],
    			value: 1 * 10 ** 18,
    		})
    		alert('投注成功！');
    		this.setState({isPlaying: false});
    		window.location.reload(true);

    	} catch(e) {

    		this.setState({isPlaying: false});
    		alert('投注失败！')
    		console.log(e);

    	}

    }

    draw = async () => {

    	this.setState({isDrawing: true});

    	//调用合约的 draw 方法
    	try {

    		var accounts = await web3.eth.getAccounts();
    		await lotteryContract.methods.draw().send({from: accounts[0]});
    		var winner = await lotteryContract.methods.winner().send({from: accounts[0]});
    		this.setState({winner});
    		alert(`本期赢家是: ${winner}`);
    		this.setState({isDrawing: false});
			window.location.reload(true);    		

    	} catch(e) {

    		this.setState({isDrawing: false});
    		alert('开奖失败！');
    		console.log(e);

    	}


    }

    drawBack = async () => {

    	this.setState({isDrawingBack: true});

    	try {
		
		var accounts = await web3.eth.getAccounts();
    	await lotteryContract.methods.drawBack().send({from: accounts[0]});
    	alert('退奖成功！');
    	this.setState({isDrawingBack: false});
    	window.location.reload(true);

    	} catch(e) {

    		this.setState({isDrawingBack: false});
    		alert('退奖失败！');
    		console.log(e);

    	}
   	

    }

    isDisable = () => {// 只要有一个按钮被点击了三个按钮都应该被 disable

    	return this.state.isPlaying || this.state.isDrawing || this.state.isDrawingBack;

    }

  render() {
    return (
      <div className="App">
        <CardExampleCard
        	manager = {this.state.manager}
            currentAccount = {this.state.currentAccount}
            players = {this.state.players}
            winner = {this.state.winner}
            round = {this.state.round}
            playersCount = {this.state.playersCount}
            balance = {this.state.balance}
            play = {this.play}
            isPlaying = {this.state.isPlaying}
            draw = {this.draw}
            isDrawing = {this.state.isDrawing}
            drawBack = {this.drawBack}
            isDrawingBack = {this.state.isDrawingBack}
            isDisable = {this.isDisable}
            buttonControl = {this.state.buttonControl}
        />
      </div>
    );
  }
}

export default App;
