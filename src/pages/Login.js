import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import {Button,Form,Image,Header,Message} from "semantic-ui-react";
import axios from "axios";
import "../assets/css/Login.css"
import Logo from "../assets/images/logo_black.PNG"

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            alert:0b1000000,  //第一位表示邮箱。第二位表示密码
            list:[
                "\u25B2输入的邮箱格式不正确！\u000A",
                "\u25B2密码位数错误！\u000A",
                "\u25B2用户不存在,请到注册页面注册！\u000A",
                "\u25B2密码输入错误！",
                "\u25B2密码错误！\u000A",
                "\u25B2或用户不存在！",
            ],
            email:"",
            pwd:"",
            load:false
        }
    }
    

    verifyFormat(){
        const regE =new RegExp('^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+(.[a-zA-Z]+)+$');
        const regP =new RegExp('^[0-9a-zA-Z_-\\W]{8,18}$');
        let { alert,  pwd ,email} = this.state;
        alert=0b1000000;
        //console.log(this.state.pwd ,this.state.email);
        if(!regE.test(email)){
            alert = alert | 0b0100000;//第四位邮箱提示消息值为真
            
        }else{
            alert = alert & 0b1011111;//第四位邮箱提示消息值为假
            
        }
        if(!regP.test(pwd)){
            alert = alert | 0b0010000;
            
        }else{
            alert = alert & 0b1101111;
        }
        this.setState({
            alert:alert,
        });
        //console.log(regE.test(email)&&regP.test(pwd));
        //console.log(regE.test(this.state.email) && regP.test(this.state.pwd));
        return regE.test(this.state.email) && regP.test(this.state.pwd);
    }

    

    signRequest(){
        if(this.verifyFormat()){
            //console.log("格式正确！");

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
                    alert("登录成功！");
                    this.props.history.push("/home");
                } else {
                    alert("登录有误，请查看提示信息！");
                    this.setState({
                        alert: 0b1000011
                    });

                }
                //console.log(res);
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
            //console.log(num);
            for(let i = 1;i<num.length;i++){
                if(num[i]===1){
                    //console.log(list[i-1]);
                    string = string + list[i-1];
                }
            }
            alert = (!string)? <div></div> :  <Message>{string}</Message>;
            
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
                                    //console.log("onchange email");
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
                            {alert}
                        </div>
                        <div className="field">
                            <Button fluid size="large" color="blue"  type="submit" onClick={()=>this.signRequest()}>登录</Button>
                        </div>
                        <div className="field">
                            <p>没有账号<NavLink className="path" to='/signup'><strong>去注册</strong></NavLink></p>
                            <NavLink className="path" to="/"><strong>回到主页</strong></NavLink>
                        </div>
                        
                    </Form>
                </div>
            </div>
        );
    } 
}

export default Login;