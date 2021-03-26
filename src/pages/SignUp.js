import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./css/SignUp.css"

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="signupBox">
                <div className="signupInBox">
                    <form className="ui form">
                        <div className="field">
                            <label>邮箱</label>
                            <div className="ui left icon input">
                                <input type="text" name="id" placeholder="请输入邮箱"></input>
                                <i className="envelope icon"></i>
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
                            <label>确认密码</label>
                            <div className="ui left icon input">
                                <input type="text" name="password" placeholder="请再次输入密码"></input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <label>昵称</label>
                            <div className="ui left icon input">
                                <input type="text" name="password" placeholder="请输入昵称"></input>
                                <i className="user icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabIndex="0" className="hidden"></input>
                                <label>我同意条款和条件</label>
                            </div>
                        </div>
                        <NavLink className="path" to='/home'>
                            <button className="ui button" type="submit">注册</button> 
                        </NavLink>                       
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);