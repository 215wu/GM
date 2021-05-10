import React, { Component } from 'react'
import {Button, Form,Input} from "semantic-ui-react"

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:this.props.data
         };
    }

    
    render() {
        const data = this.state.data;
        return (
            <div className="userUserUpdateBox">
                <div>
                {    data?
                    <Form>
                        <Form.Field control={Input} label='用户名' defaultValue={data.userName} onChange={(e)=>data.userName=e.target.value}/>
                        <Form.Field>
                          <label>性别</label>
                          <select defaultValue={data.sex} onChange={(e)=>data.sex=e.target.value}>
                            <option value="0">其他</option>
                            <option value="1">男</option>
                            <option value="2">女</option>
                          </select>
                        </Form.Field>
                        <Form.Field control={Input} label='邮箱' defaultValue={data.userEmail} onChange={(e)=>data.userEmail=e.target.value}/>
                        <Form.Field control={Input} label='电话' defaultValue={data.phone} onChange={(e)=>data.phone=e.target.value}/>
                        <Form.Field control={Input} label='地址' defaultValue={data.address} onChange={(e)=>data.address=e.target.value}/>
                        <Form.Field>
                          <label>会员等级</label>
                          <select defaultValue={data.type} onChange={(e)=>data.type=e.target.value}>
                            <option value="0">初级</option>
                            <option value="1">中级</option>
                            <option value="2">高级</option>
                          </select>
                        </Form.Field>
                        <br/>
                        <Form.Field >
                          <Button fluid color="blue" onClick={()=>this.props.setDataToUser(data)}>确认更新</Button>
                        </Form.Field>
                    </Form>
                    :
                    <div/>
                }
                </div>
                    
            </div>
        );
    }
}

export default Update;