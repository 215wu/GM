import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Logo from "../images/logo_blue.PNG";
import "./TopBar.css"

class TopBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="topBar">
                <div id="topBarLogo">
                    <div style={{ position: "relative",top: "50%",transform: "translateY(-50%)", display: "inline-block"}}>
                        <img alt="logo" className="ui avatar image "src={Logo} style={{width:"20vh",height:"20vh"}}></img>
                    </div>
                </div>
                <div  id="topBarList" >
                    <div style={{ position: "relative",top: "50%",transform: "translateY(-50%)"}}>
                        <button className="ui button"><NavLink to="/home">首页</NavLink></button>
                        <button className="ui button">关于我们</button>
                        <button className="ui button">门店信息</button>
                        <button className="ui button">明星教练</button>
                        <button className="ui button">热门课程</button>
                    </div>
                </div>
                <div id="topBarEnter">
                    <div  style={{ position: "relative",top: "50%",transform: "translateY(-50%)"}}>
                        <button className="ui button"><NavLink to="/login">登录</NavLink></button>
                        <button className="ui button"><NavLink to="/signup">注册</NavLink></button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(TopBar);