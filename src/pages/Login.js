import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./css/Login.css"

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    handleSubmit(){
        console.log("login");
    }


    render(){
        return(
            <div className="loginBox">
                <div className="loginInBox">
                    <form className="ui form">
                    <div className="field">
                            <label>账号</label>
                            <div className="ui left icon input">
                                <input type="text" name="id" placeholder="请输入账号"></input>
                                <i className="user icon"></i>
                            </div>
                        </div>
                       <div className="field">
                            <label>密码</label>
                            <div className="ui left icon input">
                                <input type="text" name="password" placeholder="请输入密码"></input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabIndex="0" className="hidden"></input>
                                <label>我同意条款和条件</label>
                            </div>
                        </div>
                            <NavLink className="path" to='/home'>
                                <button className="ui primary button" type="submit">登录</button>
                            </NavLink>
                            <NavLink className="path" to='/signup'>
                                <button className="ui button" id="signupBtn">注册</button>
                            </NavLink>
                        
                    </form>
                </div>
            </div>
        );
    } 
}

export default withRouter(Login);