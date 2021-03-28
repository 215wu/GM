import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import {Button,Form,Image,Header,Message} from "semantic-ui-react";
import axios from "axios";
import "./css/Login.css"
import Logo from "../images/logo_black.PNG"

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            alert:0b1110000,  //第一位表示邮箱。第二位表示密码
            list:[
                "\u25B2请输入符合正确格式的邮箱账号！",
                "\u25B2输入的密码位数为8-18位！",
                "输入的邮箱格式不正确！",
                "输入的密码位数不符合条件:8-18位！",
                "用户不存在,请到注册页面注册！",
                "或者密码输入错误！"
            ],
            email:"",
            pwd:"",
            exsit:false,
            load:false
        }
    }
    

    verifyFormat(){
        const regE =new RegExp('^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+(.[a-zA-Z]+)+$');
        const regP =new RegExp('^[0-9a-zA-Z_-\\W]{8,18}$');
        let { alert,  pwd ,email} = this.state;
        console.log(pwd ,email);
        console.log(regE.test(email) ,regP.test(pwd));
        alert = alert & 0b1001111;//清除初始化提示消息
        if(!regE.test(email)){
            alert = alert | 0b0001000;//第四位邮箱提示消息值为真
            
        }else{
            alert = alert & 0b1110111;//第四位邮箱提示消息值为假
            
        }
        if(!regP.test(pwd)){
            alert = alert | 0b0000100;
            
        }else{
            alert = alert & 0b1111011;
        }
        this.setState({
            alert:alert,
        });
        return regE.test(this.state.email) && regP.test(this.state.email);
    }

    

    signRequest(){
        if(this.verifyFormat()){
            console.log("格式正确！");

            axios
            .post("/auth/login", {
                email: this.state.email,
                pwd: this.state.pwd
            })
            .then(res => {
                console.log(res);
                if (res.data.status === true) {

                    //this.props.updateId(res.data.id);
                    //this.props.updateToken(res.data.token);
                    this.props.history.push("/home");
                } else {
                    this.setState({
                        alert: 0b1000011
                    });
                }
                console.log(res);
            })
            .catch(err => {
                console.log(err);
             });
        }
    }
    


    render(){
        let alert ="";
        if(this.state.alert){
            let string= '';
            let ale = this.state.alert;
            let list = this.state.list;
            let num = Array.prototype.map.call(ale.toString(2),(e=>+e));
            console.log(num);
            for(let i = 1;i<num.length-1;i++){
                if(num[i]===1){
                    console.log(list[i-1]);
                    string = string + list[i-1];
                }
            }
            alert = <Message>{string}</Message>
        }
        
        return(
            <div className="loginBox">
                <div className="loginInBox">
                    <Header as="h2" color="black" textAlign="center">
                        <Image className="ui avatar image"src={Logo}></Image>
                        欢迎登录215GM
                    </Header>
                    <Form className="ui form">
                    <div className="field">
                            <label>邮箱账号</label>
                            <div className="ui left icon input">
                                <input type="text" name="id" placeholder="请输入账号" 
                                onChange={e=>{
                                    this.setState({email:e.target.value});
                                    console.log("onchange email");
                                    }}>
                                </input>
                                <i className="user icon"></i>
                            </div>
                        </div>
                       <div className="field">
                            <label>密码</label>
                            <div className="ui left icon input">
                                <input type="text" name="password" placeholder="请输入密码"
                                onChange={e=>{
                                    this.setState({pwd:e.target.value});
                                    console.log("onchange psw");
                                    }}>
                                </input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            {alert}
                        </div>
                            
                                <Button className="ui primary button" type="submit" onClick={()=>this.signRequest()}>登录</Button>
                            
                            <NavLink className="path" to='/signup'>
                                <Button className="ui button" id="signupBtn">注册</Button>
                            </NavLink>
                        
                    </Form>
                </div>
            </div>
        );
    } 
}

export default withRouter(Login);