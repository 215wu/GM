import React, { Component } from "react";
import axios from "axios"
import {  Table } from 'semantic-ui-react'
import "../assets/css/Gymcenter.css"

class Gymcenter extends Component{
    constructor(props){
        super(props);
        this.state = {
            gyCenData:null
        }
    }


    componentDidMount = ()=>{
        axios
        .post("/getData/gymData",{})
        .then((res)=>{
            this.setState({
                gyCenData:res.data
            })
        })
        .catch((err)=>{
            console.log("获取健身房中心数据失败",err);
        })
    }
    render(){
        return(
            <div className="gymCenter">
                <div className="gymCenterBox">
                    <div className="gymCenterBoxIn">
                    <Table celled>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>图片</Table.HeaderCell>
                            <Table.HeaderCell>名称</Table.HeaderCell>
                            <Table.HeaderCell>地址</Table.HeaderCell>
                            <Table.HeaderCell>价格</Table.HeaderCell>
                            <Table.HeaderCell>营业时间</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>

                        <Table.Body>
                          {  
                                this.state.gyCenData?
                                this.state.gyCenData.map((item,key)=>(
                                    <Table.Row key={key}>
                                        <Table.Cell>
                                            <img className="gymCenImg" alt="" src={item.imgUrl}></img>
                                        </Table.Cell>
                                        <Table.Cell>{item.gName}</Table.Cell>
                                        <Table.Cell>{item.location}</Table.Cell>
                                        <Table.Cell>{item.price}</Table.Cell>
                                        <Table.Cell>{item.introduce}</Table.Cell>
                                    </Table.Row>
                                ))
                                :<Table.Row></Table.Row>
                          }
                        </Table.Body>
                    </Table>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Gymcenter;