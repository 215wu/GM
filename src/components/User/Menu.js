import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import {Image} from "semantic-ui-react"
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
            <div className="userMenuBox">
               <div className="userTXBox">
                   <Image alt="" src={this.props.image} circular />
               </div>
               <div className="userMenuBoxIn">
                   <NavLink to={`${this.props.url}`}>Welcome</NavLink>
                   <NavLink to={`${this.props.url}/update`}>修改资料</NavLink>
                   <NavLink to={`${this.props.url}/purCourse`}>购买课程</NavLink>
                   <NavLink to={`${this.props.url}/bookGym`}>预定健身房</NavLink>
                   <NavLink to={`${this.props.url}/purVip`}>购买会员</NavLink>
               </div>
               
            </div>
        );
    }
}

export default Menu;