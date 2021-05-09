import React, { Component } from "react";
import {Table,Segment} from "semantic-ui-react"
import axios from "axios"

class Coach extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:null
        }
    }

    componentDidMount = ()=>{
        this.updateData();
    }

    updateData = ()=>{
        axios
        .post("/getData/coachData")
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        .catch()
    }

    render(){
        return(
            <div className="Coach">
                <div>
                    {
                        this.state.data?
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Cell>简介</Table.Cell>
                                    <Table.Cell>图片展示</Table.Cell>
                                    <Table.Cell>图片展示</Table.Cell>
                                    <Table.Cell>寄语</Table.Cell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {this.state.data.map((item,key)=>(
                                    <Table.Row key={key}>
                                        <Table.Cell>
                                            <img alt="" src={item.imgUrl}></img>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <img alt="" src={item.imgUrl}></img>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <img alt="" src={item.imgUrl}></img>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Segment>
                                                {item.introduce}
                                            </Segment>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                        :
                        <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default Coach;