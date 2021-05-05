import React, { Component } from 'react';
import {Button,Form,Image,Header,Message} from "semantic-ui-react";
import {NavLink} from 'react-router-dom'
import Logo from "../assets/images/logo_black.PNG"

import "../assets/css/CoachLogin.css"
 class CoLogin extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             alert:false,
             alertTxt:""
          };

     }
     render() {
         return (
             <div className="coachLogin">
                 <div className="coaLoIn">
                    <Header>
                    <Image className="ui avatar image"src={Logo}></Image>教练登录
                    </Header>
                    <Form className="ui form">
                    <div className="field">
                            <label>账号</label>
                            <div className="ui left icon input">
                                <input type="text" name="id" placeholder="请输入账号" 
                                onChange={e=>{
                                    this.setState();
                                    }}>
                                </input>
                                <i className="user icon"></i>
                            </div>
                        </div>
                       <div className="field">
                            <label>密码</label>
                            <div className="ui left icon input">
                                <input type="password" name="password" placeholder="请输入密码"
                                onChange={e=>{
                                    this.setState({pwd:e.target.value});
                                    //console.log("onchange psw");
                                    }}>
                                </input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            {
                                this.state.alert ?<Message>{this.state.alertTxt}</Message>:""
                            }
                        </div>
                        <div className="field">
                            <Button fluid size="large" color="blue"  type="submit">登录</Button>
                        </div>
                        <div className="field"> 
                            <p>
                                <NavLink className="path" to='/Login'><strong>会员登录</strong></NavLink>
                                {"\u0009"}
                                <NavLink className="path" to='/adminLogin'><strong>管理员登录</strong></NavLink>
                            </p>
                            <NavLink className="path" to="/"><strong>回到主页</strong></NavLink>
                        </div>
                        
                    </Form>
                 </div>
             </div>
         );
     }
 }
 
 export default CoLogin;