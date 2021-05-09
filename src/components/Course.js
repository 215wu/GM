import React, { Component } from "react";
import {Table,Segment} from "semantic-ui-react"
import axios from "axios"

class Course extends Component{
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
        .post("/getData/courseData")
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        .catch()
    }



    render(){
        return(
            <div className="Course">
                <div>
                    
                    {this.state.data?
                        <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell >课程名</Table.Cell>
                                <Table.Cell >日期</Table.Cell>
                                <Table.Cell >时间段</Table.Cell>
                                <Table.Cell  >简介 </Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                this.state.data.map((item,key)=>(
                                    <Table.Row key={key}>
                                        <Table.Cell >{item.coName}</Table.Cell>
                                        <Table.Cell >{item.plan}</Table.Cell>
                                        <Table.Cell >{item.period}</Table.Cell>
                                        <Table.Cell >
                                            <Segment>
                                                {item.introduce}
                                            </Segment>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>
                    :
                    <div/>
                    }
                </div>
            </div>
        );
    }
}

export default Course;