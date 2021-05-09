import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import {Button,Form,Image,Header,Message} from "semantic-ui-react";
import axios from "axios";
import "../assets/css/SignUp.css";
import Logo from "../assets/images/logo_black.PNG"


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            alert:0b100000,  
            list:[
                "\u25B2输入的邮箱为空或格式不正确！\u000A",
                "\u25B2输入的密码位数为空或不符合条件:8-18位！\u000A",
                "\u25B2昵称不能为空！\u000A",
                "\u25B2两次输入的密码不一致，请重新输入！\u000A",
                "\u25B2该邮箱已注册账号！"
            ],
            email:"",
            pwd:"",
            name:"",
            pwdConfirm:"",
            load:false
        }
    }

    verifyFormat(){
        const regE =new RegExp('^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+(.[a-zA-Z]+)+$');
        const regP =new RegExp('^[0-9a-zA-Z_-\\W]{8,18}$');
        let { alert,  pwd ,email,name,pwdConfirm} = this.state;
        //console.log(this.state.pwd ,this.state.email);
        alert = (!regE.test(email)) ? (alert | 0b010000) : (alert & 0b101111);
        alert = (!regP.test(pwd)) ? (alert | 0b001000) : (alert & 0b110111);
        alert = (!name) ? (alert | 0b000100) : (alert & 0b111011);
        alert = (pwd !== pwdConfirm) ? (alert | 0b000010) : (alert & 0b111101);
        
        this.setState({
            alert:alert,
        });
        return regE.test(email)&&regP.test(pwd)&&name&&(pwd === pwdConfirm);
    };   

    sendSignupRequest(){
        if(this.verifyFormat()){
           // console.log("格式正确！");
            axios
            .post("auth/signup",{
                userEmail:this.state.email,
                userPwd:this.state.pwd,
                userName:this.state.name
            })
            .then(res=>{
                switch (res.data.flag) {
                    case 1:
                         //this.props.updateId(res.data.id);
                         //this.props.updateToken(res.data.token);
                         alert("注册成功！");
                         this.props.history.push(`/user/${res.data.id}`);
                         break;
                     case 2:
                         alert("邮箱已被注册！");
                         this.setState({
                             alert: 0b1000011
                         });
                         break;
                     default:
                         break; 
                 }
            })
        }
    };

    render(){
        let string = "";
        if(this.state.alert){
            const ale =this.state.alert;
            let num = Array.prototype.map.call(ale.toString(2),e=>+e);
            for(let i = 1; i < num.length ; i++){
                if(num[i]===1){
                    string = string + this.state.list[i-1];
                }
            }
        };
    let alertInfo = (!string) ? <div></div> : <Message>{string}</Message> ;
        return(
            <div className="signupBox">
                <div className="signupInBox">
                    <Header textAlign="center">
                        <Image className="ui avatar image"src={Logo} ></Image>
                            欢迎加入215GM
                    </Header>
                    <Form className="ui form">
                        <div className="field">
                            <label>邮箱</label>
                            <div className="ui left icon input">
                                <input type="text" name="id" placeholder="请输入邮箱"
                                onChange={event=>{
                                    this.setState({
                                        email:event.target.value
                                    })
                                }}></input>
                                <i className="envelope icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <label>昵称</label>
                            <div className="ui left icon input">
                                <input type="text"  placeholder="请输入昵称"
                                onChange={event=>{
                                    this.setState({
                                        name:event.target.value
                                    })
                                }}></input>
                                <i className="user icon"></i>
                            </div>
                        </div>
                       <div className="field">
                            <label>密码</label>
                            <div className="ui left icon input">
                                <input type="password" name="password" placeholder="请输入密码"
                                onChange={event=>{
                                    this.setState({
                                        pwd:event.target.value
                                    })
                                }}></input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <label>确认密码</label>
                            <div className="ui left icon input">
                                <input type="password" name="password" placeholder="请再次输入密码"
                                onChange={event=>{
                                    this.setState({
                                        pwdConfirm:event.target.value
                                    })
                                }}></input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        {alertInfo}
                        <div className="field">
                           <Button fluid size="large" color="blue" type="submit" 
                            onClick={()=>this.sendSignupRequest()}>注册</Button>
                        </div>
                        <div className="field" style={{textAlign:"center"}}>
                            <p>已有帐号,<NavLink className="path" to="/login"><strong>去登录</strong></NavLink></p>
                            <NavLink className="path" to="/"><strong>回到主页</strong></NavLink>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default SignUp;