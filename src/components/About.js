import React, { Component } from "react";
import {Segment,Divider,Header} from "semantic-ui-react"
import axios from "axios"
import "../assets/css/About.css"

class Membershop extends Component{
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
        .post("/getData/aboutData")
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        .catch()
    }

    render(){
        return(
            <div className="About">
                <div className="aboutBox">
                    { this.state.data?
                    this.state.data.map((item,key)=>(
                        <div className="aboutContentItem" key={key}>
                        <Segment >
                            <Header as="h2" textAlign='center'>
                                    <p>{item.abTitle}</p>
                                    <p><span>作者：{item.author}</span>
                                    <br/>
                                    <span>时间：{item.time}</span> </p>
                            </Header>

                            <Divider/>

                                <div>
                                    {item.content}
                                </div>
                        </Segment>
                        </div>
                    ))
                    
                    :
                    <div></div>

                    }
                </div>
            </div>
        );
    }
}

export default Membershop;