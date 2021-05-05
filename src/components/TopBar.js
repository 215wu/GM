import React, { Component } from "react";
import { NavLink,Link} from "react-router-dom";
import { Button} from 'semantic-ui-react';
import Logo from "../assets/images/logo_blue.PNG";
import "../assets/css/TopBar.css"

class TopBar extends Component{
    constructor(props){
        super(props);
        this.state = { 
            login:false,
            
        }
    }



    render(){
        return(
            <div className="topBar">
                <div id="topBarLogo">
                    <div style={{ position: "absolute",top: "50%",left:"50%",transform: "translate(-50%,-50%)", display: "inline-block"}}>
                        <NavLink to="/">
                            <img alt="logo" className="ui avatar image "src={Logo} style={{width:"20vh",height:"20vh"}}></img>
                        </NavLink>
                    </div>
                </div>
                <div  id="topBarList" >
                    <div style={{ position: "absolute",top: "50%",left:"10%",transform: "translateY(-50%)"}}>
                        <Button.Group widths='5' color='teal'  size='huge'>
                            <Link to="/home/"><Button >首页</Button></Link>
                            <Link to="/home/gymcenter"><Button >门店信息</Button></ Link>
                            <Link to="/home/about"><Button >关于我们</Button></Link>
                            <Link to="/home/coach"><Button >明星教练</Button></Link>
                            <Link to="/home/course"><Button >热门课程</Button></Link>
                        </Button.Group>
                    </div>
                </div>
                        <div id="topBarEnter">
                            <div  style={{ position: "absolute",top: "50%",left:"20%",transform: "translateY(-50%)"}}>
                                <Link to="/login"><Button inverted size='big'>登录</Button></Link>
                                <Link to="/signup"><Button inverted size='big'>注册</Button></Link>
                            </div>
                        </div>

                
            </div>
        );
    }
}
export default TopBar;
