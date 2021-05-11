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
            data:null,//用户数据
            dataTo:null
         };
    }

    componentDidMount = ()=>{
        console.log("User DidMount:props:",this.props);
        this.setState({
            data:this.props.userData
        })
    }

    getDataFrom = (doneData,doFlag)=>{
        switch(doFlag){
            case "UPDATE_USERDATA":
                this.updateUserData(doneData);
                break;
            default:
                break;
        }
    }


    updateUserData = (doneData)=>{
        console.log("User:getDataFromUpdate:",doneData);
        axios
        .post("/updateData/userData",doneData)
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

    setShowDataTo = (Info,doFlag)=>{
        switch(doFlag){
            case "BOOK_GYM_ALL":
                console.log("User---get:doFlag:BOOK_GYM_ALL")
                this.setAllGymData();
                break;
            case "PUR_COURSE_ALL":
                console.log("User---get:doFlag:PUR_COURSE_ALL")
                this.setAllCouData();
                break;
            case "PUR_COURSE_SEARCH":
                console.log("User---get:doFlag:PUR_COURSE_SEARCH")
                this.setSearchCouData(Info);
                break;
            case "BOOK_GYM_SEARCH":
                console.log("User---get:doFlag:BOOK_GYM_SEARCH")
                this.setSearchGymData(Info);
                break;
            default:
                break;
        }
    } 

    setAllGymData = ()=>{
         console.log("User---setAllGymData");
         axios
        .post("/getData/gymData",{})
        .then((res)=>{
            this.setState({
                dataTo:res.data
            });

        })
        .catch((err)=>{
            console.log("获取健身房中心数据失败",err);
        })
    }
    
    setAllCouData = ()=>{
        console.log("User---setAllCouData");
        axios
       .post("/getData/courseData",{})
       .then((res)=>{
           console.log("User,getAllCouData",res.data);
           this.setState({
               dataTo:res.data
           });

       })
       .catch((err)=>{
           console.log("获取课程数据失败",err);
       })
    }

    setSearchCouData = (str)=>{
        console.log("User---setSearchCouData");
        axios
        .post("/searchData/courseData",{
            searchStr:str
        })
        .then((res)=>{
           this.setState({
               dataTo:res.data
           });

        })
        .catch((err)=>{
           console.log("搜索课程数据失败",err);
        })
    }

    setSearchGymData = (str)=>{
        console.log("User---setSearchGymData");
        axios
        .post("/searchData/gymData",{
            searchStr:str
        })
        .then((res)=>{
           this.setState({
               dataTo:res.data
           });

        })
        .catch((err)=>{
           console.log("搜索健身中心数据失败",err);
        })
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
                                            <item.component {...props} data={this.props.userData} 
                                            sendDataToUser={(data,doFlag)=>this.getDataFrom(data,doFlag)}
                                            showData = {this.state.dataTo}
                                            sendDeal = {(Info,doFlag)=>this.setShowDataTo(Info,doFlag)} />
                                            //sendDataToUser:Update用于将更新后的信息给User完成更新
                                            //data用于接收用户信息
                                            //showData接收各个页面的展示信息
                                            //
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