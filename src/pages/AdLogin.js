import React, { Component } from 'react';
import {Button,Form,Image,Header,Message} from "semantic-ui-react";
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import { updateId, updateToken } from "../model/actions/UpdateActions";
import Logo from "../assets/images/logo_black.PNG"

import "../assets/css/CoachLogin.css"
import axios from 'axios';
 class AdLogin extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             aId:"",
             aPwd:"",
             alert:false,
             alertTxt:""
          };

     }

     verityFormat(id,pwd){
        let txt = "",idFor=/[0-9]{6,12}/;
        let pwdFor = new RegExp("[\\w|?|!|,|.|-]{8,18}");
        if(!idFor.test(id)){
            txt=txt+"输入账号不符合规范(账号不能为空,且为6-12位数字)\u000A";
        }
        if(!pwdFor.test(pwd)){
            txt=txt+"输入密码不符合规范(账号不能为空,且为8-18位字符(字母、数字、或?,.-_!))";
        }
        if( !idFor.test(id) || !pwdFor.test(pwd)){
            this.setState({
                alert:true,
                alertTxt:txt
            });
            return false;
        }
        this.setState({
            alert:false,
            alertTxt:""
        });
        return true;
        
     }
     adLogin(){
        if(this.verityFormat(this.state.aId,this.state.aPwd)){
            axios
            .post("/auth/adminLogin",{
                aId:this.state.aId,
                aPwd:this.state.aPwd
            })
            .then(res=>{
                switch (res.data.flag){
                    case 0: 
                       alert("登录成功！");
                       //console.log("登录返回的",res.data.aId,res.data.token)
                       this.props.updateId(res.data.aId);
                       this.props.updateToken(res.data.token);
                       this.props.history.push(`/admin/${res.data.aId}`);
                       break;
                    case 1:
                        alert("用户不存在！");
                        break;
                    case 2:
                        alert("密码错误！");
                        break;
                    default:
                        console.log("flag:",res.data.flag);
                        break;
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
     }
     render() {
         return (
             <div className="coachLogin">
                 <div className="coaLoIn">
                    <Header>
                    <Image className="ui avatar image"src={Logo}></Image>管理员登录
                    </Header>
                    <Form className="ui form">
                    <div className="field">
                            <label>账号</label>
                            <div className="ui left icon input">
                                <input type="text" name="id" placeholder="请输入账号"
                                onChange={e=>{
                                    this.setState({aId:e.target.value});
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
                                    this.setState({aPwd:e.target.value});
                                    }}>
                                </input>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            {
                                this.state.alert ?<Message>{this.state.alertTxt}</Message>:""
                            }
                        </div>
                        <div className="field">
                            <Button fluid size="large" color="blue"  type="submit" onClick={()=>this.adLogin()}>登录</Button>
                        </div>
                        <div className="field"> 
                            <p>
                                <NavLink className="path" to='/Login'><strong>会员登录</strong></NavLink>
                                {"\u0009"}
                                <NavLink className="path" to='/coachLogin'><strong>教练登录</strong></NavLink>
                            </p>
                            <NavLink className="path" to="/"><strong>回到主页</strong></NavLink>
                        </div>
                        
                    </Form>
                 </div>
             </div>
         );
     }
 }
 
  const mapDispatchToProps = dispatch => {
    return {
      updateToken: token => {
        dispatch(updateToken(token));
      },
      updateId: id => {
        dispatch(updateId(id));
      }
    };
  };

 export default connect(
    null,
     mapDispatchToProps
 )(AdLogin);