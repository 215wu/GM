import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import {Image} from "semantic-ui-react"
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }

    setActive = (e)=>{
        Array.prototype.map.call(document.getElementsByClassName("userMenuBoxIn")[0].getElementsByTagName("a"),(item)=>{
            item.style.backgroundColor = "transparent";
        });
        e.target.style.backgroundColor = "#87F5FF";
    }

    render() {
        return (
            <div className="userMenuBox">
               <div className="userTXBox">
                   <Image alt="" src={this.props.image} circular />
               </div>
               <div className="userMenuBoxIn">
                   <NavLink to={`${this.props.url}/update`} onClick={e=>this.setActive(e)}>修改资料</NavLink>
                   <NavLink to={`${this.props.url}/purCourse` } onClick={e=>this.setActive(e)}>购买课程</NavLink>
                   <NavLink to={`${this.props.url}/bookGym`} onClick={e=>this.setActive(e)}>预定健身房</NavLink>
                   <NavLink to={`${this.props.url}/purVip`} onClick={e=>this.setActive(e)}>购买会员</NavLink>
                   <NavLink to={`${this.props.url}`} onClick={e=>this.setActive(e)}>操作指南</NavLink>
                   <NavLink to="/login">退出登录</NavLink>
               </div>
               
               
            </div>
        );
    }
}

export default Menu;