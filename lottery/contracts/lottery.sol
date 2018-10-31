pragma solidity ^0.4.24;

/**
 * The Lottery contract does this and that...
 */
contract Lottery {
	address public manager; // 管理员地址
	address[] public players; // 彩民地址合集
	address public winner; // 中奖人地址
	uint public round; // 彩票期数 

	constructor() public payable{
		manager = msg.sender;
	} 

	function play () public payable { //添加彩民到彩民集合
		
		require (msg.value == 1 ether,'111111');
		players.push(msg.sender);
		
	}	

	modifier onlyManager() { //修饰器限定函数调用的权限
		require (msg.sender == manager,'111111'); 
		_; 
	}
	

	function draw () onlyManager public {//开奖函数,只要有一个人参与即可开奖

		require (players.length != 0,'players length is 0');
		uint res = uint(sha3(block.difficulty,now,players.length));
		uint index = res % players.length;
		winner = players[index];
		winner.transfer(address(this).balance);
		round++;
		delete players; // 开奖之后清空彩民集合
		
	}
	
	function drawBack () onlyManager public {// 退奖函数，每个彩民投注的钱原路返回
		
		require (players.length != 0,'players length is not should be 0');
		for (uint i = 0; i < players.length; i++) {
			players[i].transfer(1 ether);
		}
		round++;
		delete players;
		
	}

	function getPlayers () public view returns(address[]) {// 获取所有玩家的信息
		return players;
	}
	
	function getAllBalance () public view returns(uint) { // 查看奖池所有奖金
		return address(this).balance;
	}
	
	function getPlayersCount ()  public view returns(uint) {// 获取所有玩个数
		return players.length;
	}
	
	
}
