import React, { Component } from "react";
import {Route,Switch ,withRouter  } from "react-router-dom";
import Swipper from "./Swipper";
import About from "./About";
import Gymcenter from "./Gymcenter";
import Coach from "./Coach";
import Course from "./Course";



class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  };
  render(){

    return (
        <div className="Content">
          <Switch>
            <Route exact path="/home" component={Swipper} />                   
            <Route path="/about" component={About} />
            <Route path="/gymcenter" component={Gymcenter} />
            <Route path="/coach" component={Coach} />
            <Route path="/course" component={Course} />
          </Switch>
            
        </div>
        
    );
  }
    
  
}

export default withRouter(Content);