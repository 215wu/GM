import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TopBar from "../components/TopBar"

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <TopBar></TopBar>
        );
    }
}

export default withRouter(Home);