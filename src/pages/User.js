import React, { Component } from 'react'
import {Route} from "react-router-dom"
import axios from "axios"
import {connect} from "react-redux"
import updataUserDataAction from "../model/actions/UpdateUserDataAction"

import Menu from "../components/User/Menu"
import "../assets/css/User.css"
const Img = "https://zijieke.com/semantic-ui/images/avatar2/small/mark.png"
class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:null
         };
    }

    componentDidMount = ()=>{
        console.log("User DidMount:props:",this.props);
        this.setState({
            data:this.props.userData
        })
    }

    getDataFromUpdate = (updatedData)=>{
        console.log("User:getDataFromUpdate:",updatedData);
        axios
        .post("/updateData/userData",updatedData)
        .then((res)=>{
            if(res.data.flag){
                //console.log(res.data.userData);
                this.props.sendUpdateUserDataAction(res.data.userData);
                alert("修改资料成功！")
            }else{
                alert("服务器数据库操作失败！")
            }
            
        }).catch(err=>{
            alert("修改资料失败！");
        })
        console.log("User--UpdatedProps:",this.props);
        
    }
    render() {
        return (
            <div className="userBox" >
                <Menu  url={this.props.match.url} image={Img}/>
                <div className="userDoBox">
                   {
                       this.props.routes?
                       this.props.routes.map((item,key)=>(
                           item.exact ?
                           <Route key={key} exact path={item.path} component={item.component}/>
                           :
                           <Route key={key} path={item.path} 
                                    render={
                                        (props)=>(
                                            <item.component {...props} data={this.state.data} 
                                            setDataToUser={(data)=>this.getDataFromUpdate(data)} />
                                        ) 
                                    }
                            />

                       ))
                       :
                       <div/>

                   }
               </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
    return {
        sendUpdateUserDataAction :(userData)=>{
        dispatch(updataUserDataAction(userData))
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);