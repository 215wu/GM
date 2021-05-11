import React, { Component } from 'react'
import {Segment,Divider,Header,Form, Button} from "semantic-ui-react"

import IMG_URL from "../../assets/images/erweima.png"
class PurVip extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:this.props.data,
            newtype:this.props.data.type,
            changeFlag:false
         };
    }

    readyChange = ()=>{
        document.getElementsByClassName("userPurCouDia")[0].showModal();
        this.setState({
            changeFlag:true
        })
    }

    doChangeType = ()=>{
        this.props.sendDataToUser({
            ...this.props.data,
            type:this.state.newtype
        },"UPDATE_USERDATA");
        document.getElementsByClassName("userPurCouDia")[0].close();

        this.setState({
            changeFlag:false
        })
    }
    render() {
        return (
            <div className="userPurVipBox">
                <div>
                    <dialog className="userPurCouDia">
                        <p>您将从<strong>{["初级","中级","高级"][this.state.data.type]}会员</strong>转为
                        <strong>{["初级","中级","高级"][this.state.newtype]}会员</strong></p>
                        <img alt="" src={IMG_URL}></img>
                        <p>请扫码完成支付{(this.state.newtype - this.props.data.type)*200}元</p>
                        <Button fluid onClick={()=>this.doChangeType()}>支付完成点击确认</Button>
                    </dialog>
                    <Form>
                        <Form.Field>
                            <label>您当前的会员等级为：<strong>{["初级","中级","高级"][this.state.data.type]}</strong></label>
                        </Form.Field>
                        <Form.Field>
                            <label></label>
                            <select defaultValue={this.state.data.type} onChange={(e)=>{this.setState({newtype:e.target.value})}}>
                            <option value="0">初级</option>
                            <option value="1">中级</option>
                            <option value="2">高级</option>
                            </select>
                        </Form.Field>
                        <Form.Field>
                            <Button fluid color="grey" onClick={()=>this.readyChange()}>修改会员等级</Button>
                        </Form.Field>
                        
                    </Form>
                
                <Segment >
                    <Header as="h2" textAlign='center'>
                            <p>会员等级详情</p>
                    </Header>
                    <Divider/>
                    <Header as="h3">
                            <p>初级会员</p>
                    </Header>
                    <Divider/>
                    <div className="userPurVipContent">
                        {"\u25BA"}初级会员第一条<br/><br/>
                        {"\u25BA"}初级会员第二条<br/><br/>
                        {"\u25BA"}初级会员第三条<br/><br/>
                        {"\u25BA"}初级会员第四条<br/><br/>
                        {"\u25BA"}初级会员第五条<br/><br/>
                        ......
                    </div>
                        <Divider/>
                    <Header as="h3">
                            <p>中级会员</p>
                    </Header>
                    <Divider/>
                    <div className="userPurVipContent">
                        {"\u25BA"}中级会员第一条<br/><br/>
                        {"\u25BA"}中级会员第二条<br/><br/>
                        {"\u25BA"}中级会员第三条<br/><br/>
                        {"\u25BA"}中级会员第四条<br/><br/>
                        {"\u25BA"}中级会员第五条<br/><br/>
                        ......
                    </div>
                        <Divider/>
                    <Header as="h3">
                            <p>高级会员</p>
                    </Header>
                    <Divider/>
                    <div className="userPurVipContent">
                        {"\u25BA"}高级会员第一条<br/><br/>
                        {"\u25BA"}高级会员第二条<br/><br/>
                        {"\u25BA"}高级会员第三条<br/><br/>
                        {"\u25BA"}高级会员第四条<br/><br/>
                        {"\u25BA"}高级会员第五条<br/><br/>
                        ......
                    </div>
                </Segment>
                </div>
            </div>
        );
    }
}

export default PurVip;