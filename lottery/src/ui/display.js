import React from 'react';
import {Button, Card, Icon, Image, Statistic, Label} from 'semantic-ui-react';

const CardExampleCard = (props) => (
    <Card style={{width:'370px',margin:'0 auto'}}>
        <Image src='images/logo.png'/>
        <Card.Content>
            <Card.Header color=''>性感美女在线等你</Card.Header>
            <Card.Meta>
            <Label as='a' color='red' ribbon>
                管理员地址:
            </Label>
            <span>{props.manager}</span> 
            <Label as='a' color='blue' ribbon>
                当前地址:
            </Label>
            <span>{props.currentAccount}</span>
            </Card.Meta>
            <Card.Description>天天开奖，天天放飞梦想！</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user'/>
                {props.playersCount}人参与
            </a>
            <p>上一期中奖者：{props.winner}</p>
        </Card.Content>
        <Card.Content extra>
            <Statistic color='red'>
                <Statistic.Label>奖金池</Statistic.Label>
                <Statistic.Value>{props.balance}ETH</Statistic.Value>
            </Statistic>
        </Card.Content>
        <Card.Content extra>
            <Statistic color='blue'>
                <Statistic.Value>第{props.round}期</Statistic.Value>
                <Statistic.Label>
                    <a href='https://ropsten.etherscan.io/address/0xe4e80Fd7aAf9Db96A3CCC1dF1DdC9C8467BeD05E'>
                        点击我查看交易历史
                    </a>
                </Statistic.Label>
            </Statistic>
        </Card.Content>
        <Button animated='fade' color='green' onClick={props.play} loading={props.isPlaying}
                disabled={props.isDisable()}>
            <Button.Content visible>投注产生希望</Button.Content>
            <Button.Content hidden>购买放飞梦想</Button.Content>
        </Button>
        <Button inverted color='red' style={{display: props.buttonControl}} onClick={props.draw}
                loading={props.isDrawing} disabled={props.isDisable()}>
            开奖
        </Button>
        <Button inverted color='orange' style={{display: props.buttonControl}} onClick={props.drawBack}
                loading={props.isDrawingBack} disabled={props.isDisable()}>
            退奖
        </Button>
    </Card>
)

export default CardExampleCard
