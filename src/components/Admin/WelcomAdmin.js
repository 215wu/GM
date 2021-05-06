import React, { Component } from 'react';

class WelcomAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            adminName:"***"
         };
    }
    render() {
        return (
            <p style={{fontSize:"3rem",color:"white"}}>Welcome Admin {this.state.adminName}</p>
            );
    }
}

export default WelcomAdmin;