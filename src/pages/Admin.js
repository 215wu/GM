import React, { Component } from 'react';
import {Form,Image} from "semantic-ui-react" 
import {Route,NavLink} from 'react-router-dom'
import {connect} from "react-redux"

import "../assets/css/Admin.css"
import img from "../assets/images/logo_green.PNG"

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            token:null,
            imgUrl:img
         };
    }
    componentDidMount(){
    }
    render() {
        if(this.props.token){

        return(
            <div className="admin">
                <div className="adminMenu">
                    <div>
                        <Image id="adminImg" src={img}  circular alt="img" />
                    </div>
                    <Form  onClick={
                        (e)=>{
                            let x = document.getElementsByClassName("ui form")[0].getElementsByClassName("field");
                           // console.log(...x);
                            let domSet = new Set([...x]);
                            domSet.forEach((item)=>{
                                item.style.backgroundColor = "transparent";
                            });
                            //console.log(...x);
                            
                           if( e.target.parentNode.getAttribute("class") === "field"){
                               e.target.parentNode.style.backgroundColor = "rgb(61, 145, 219)";
                           }
                            
                            //console.log(e.target);

                        }
                    }>
                       <div className="field">
                            <NavLink to={`${this.props.match.url}/updateInfo`}> 修改资料</NavLink>
                       </div>
                       <div className="field">
                            <NavLink to={`${this.props.match.url}/manageBookRecord`} className="2222"> 预定信息管理</NavLink>
                       </div>
                       <div className="field">
                            <NavLink to={`${this.props.match.url}/manageUser`}>会员信息管理</NavLink>
                        </div>
                        <div className="field">
                            <NavLink to={`${this.props.match.url}/manageCoach`}>教练信息管理</NavLink>
                        </div>
                        <div className="field">
                            <NavLink to={`${this.props.match.url}/manageAbout`}>宣传信息管理</NavLink>
                        </div>
                        <div className="field">
                            <NavLink to={`${this.props.match.url}/manageNotify`}>通知信息管理</NavLink>
                        </div>
                        <div className="field">
                            <NavLink to={`${this.props.match.url}/manageMachine`}>器材信息管理</NavLink>
                        </div>
                        <div className="field">
                            <NavLink to={`${this.props.match.url}/manageGymcenter`}>场地信息管理</NavLink>
                        </div>
                        <div className="field">
                            <NavLink to={`${this.props.match.url}/manageRoom`}>教室信息管理</NavLink>
                        </div>
                        <div className="field">
                            <NavLink to={`${this.props.match.url}/managePurchaseRecord`}>购课信息管理</NavLink>
                        </div>
                        <div className="field">
                            <NavLink to={`${this.props.match.url}/managePurchaseRecord`}>购课信息管理</NavLink>
                        </div>
                    </Form>
                </div>
                <div className="adminMain">
                    {
                    this.props.routes.map((route,key)=>{
                        if(route.exact){
                            return <Route key={key} exact path={route.path} component={route.component}/>
                        }else{
                            return <Route key={key}  path={route.path} component={route.component}/>
                        }
                    })
                    }
                </div>
            </div>  
            )
        }else{
            return (
                <div>
                    <p style={{fontSize:"3rem",color:"white"}}>请先登录</p>
                    <NavLink to="/adminLogin">去登录</NavLink>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    //console.log("拿到state",state);
    return state;
}

export default connect(mapStateToProps)(Admin);