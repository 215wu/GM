import {Component} from "react";
import {NavLink , withRouter} from "react-router-dom";
import { List, Button} from 'semantic-ui-react';
import "../assets/css/Footer.css";
import wxImg from "../assets/images/weixin.png";
import logo from "../assets/images/logo_blue.PNG"

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="footerBox">
                <div className="fLogo">
                    <img alt="" src={logo} style={{height:"100px",width:"100px",display:"block"}}></img>
                    <Button circular color='blue' icon='qq' />
                    <Button circular color='green' icon='weixin' />
                    <Button circular color='youtube' icon='youtube' />
                </div>
                <div className="fInBox">
                    <List   className="fList">
                        <List.Item>
                          <List.Icon name='users'/>
                          <List.Content>
                              <NavLink to="/signup">加入我们</NavLink>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='phone' />
                          <List.Content>12345678910</List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='mail' />
                          <List.Content>
                            <a href='mailto:215GM@163.com' color="grey">215GM@215wu.com</a>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='weibo' />
                          <List.Content>
                            215GM
                          </List.Content>
                        </List.Item>
                    </List>
                   
                </div>
                <div className="fImg">
                    <img alt="" src={wxImg}></img>
                   {/*<img alt="" src={gzhImg}></img>*/}
                </div>
                <div className="fCp">
                    <p>Copyright © 2021 All Rights Reserved .备案号:辽ICP备2021003034号 </p>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);