# <font color="#00FF7F">DAPP</font>
***


## <font color="#00FF7F">前期的环境准备</font>
1. 安装npm
- 先更新源

```shell
 sudo apt-get update  # 取回更新的软件包列表信息
 sudo apt-get upgrade # 进行一次升级
```
- 安装npm

```shell
sudo apt-get install npm
sudo npm install npm@latest -g
sudo npm install -g n
sudo n latest
sudo n stable
```
- 为USER用户添加权限

```shell
sudo chown -R $USER:$(id -gn $USER) /home/alexbrucelu/.config
```
- 查看node和npm的版本

```shell
npm -v
node -v
```
2. npm安装项目需要的包

```shell
npm install web3 # 用于交互
npm install create-react-app -g # 用于创建react项目
npm install solc # 编译智能合约
npm install mocha # 用于测试
```
## <font color="#00FF7F">1.lottery</font>
***
![](https://github.com/AlexBruceLu/DAPP/wiki/lotter.png)


## <font color="#00FF7F">crowdfunding</font>
***
