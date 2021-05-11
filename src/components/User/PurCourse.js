import React, { Component } from 'react'
import {Table,Header,Button,Input,Segment} from "semantic-ui-react"
class PurCourse extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchStr:""
         };
    }
    componentDidMount = ()=>{
        this.props.sendDeal(null,"PUR_COURSE_ALL");
        console.log(this.props.showData);
    }

    doSearch = ()=>{
        this.props.sendDeal(this.state.searchStr,"PUR_COURSE_SEARCH");
    }
    
    render() {
        return (
            <div className="userPurCouBox">
                <div className="userPurCouBoxIn">
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell colSpan="2" >
                                    <Input fluid onChange={(e)=>{this.setState({searchStr:e.target.value})}}>
                                        <input/>
                                        <Button onClick={()=>this.doSearch()}>搜索</Button>
                                    </Input>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button>购课记录</Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell width={4}>课程信息</Table.Cell>
                                <Table.Cell width={10}>课程介绍</Table.Cell>
                                <Table.Cell width={2}>操作</Table.Cell>
                            </Table.Row>

                        </Table.Header>
                        <Table.Body>
                            {
                                this.props.showData?
                                this.props.showData.map((item,key)=>(
                                    <Table.Row key={key}>
                                            <Table.Cell>
                                                <Header>
                                                    <strong>{item.coName}</strong>
                                                    <Header.Subheader><p><strong>安排：</strong>{item.plan}</p></Header.Subheader>
                                                    <Header.Subheader><p><strong>时间段：</strong>{item.period}</p></Header.Subheader>
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Segment>{item.introduce}</Segment>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Button>购课</Button>
                                            </Table.Cell>
                                        </Table.Row>
                                ))
                                :
                                <Table.Row>
                                    <Table.Cell>
                                        <Header textAlign="center">
                                        没有相关数据哟....
                                        </Header>
                                    </Table.Cell>
                                </Table.Row>
                                
                            }
                            
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    }
}

export default PurCourse;