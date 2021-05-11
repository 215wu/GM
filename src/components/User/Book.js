import React, { Component } from 'react'
import {Table,Input,Button,Header,Image} from "semantic-ui-react"

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            serachStr:""
        };
    }
    componentDidMount = ()=>{
        this.props.sendDeal(null,"BOOK_GYM_ALL");
        console.log(this.props.showData);
    }

    doSearch = ()=>{
        this.props.sendDeal(this.state.serachStr,"BOOK_GYM_SEARCH");
    }
    render() {
        return (
            <div className="userBookBox">
                <div className="userBookBoxIn">
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell colSpan="2">
                                    <Input fluid onChange={(e)=>this.setState({serachStr:e.target.value})}>
                                        <input/>
                                        <Button onClick={()=>this.doSearch()}>搜索</Button>
                                    </Input>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button>预定记录</Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell width={4}>健身房信息</Table.Cell>
                                <Table.Cell width={10}>详情</Table.Cell>
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
                                                    <strong>{item.gName}</strong>
                                                    <Header.Subheader><p><strong>位置：</strong>{item.location}</p></Header.Subheader>
                                                    <Header.Subheader><p><strong>价格：</strong>{item.price}元/人</p></Header.Subheader>
                                                    <Header.Subheader><p><strong>面积：</strong>{item.size}M<sup>2</sup></p></Header.Subheader>
                                                    <Header.Subheader><p><strong>营业时间：</strong>{item.introduce}</p></Header.Subheader>
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Image src={item.imgUrl}></Image>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Button>预定</Button>
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

export default Book;