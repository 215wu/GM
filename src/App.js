import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Membershop from "./pages/Membershop";
import Gymcenter from "./pages/Gymcenter";
import Coach from "./pages/Coach";
import Course from "./pages/Course";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  };
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <div>
              <div>
                
              </div>
              <div style={{ margin: "10px 10px 10px 10px" }}>
                <Route path="/home" component={Home} />
                <Route path="/membershop" component={Membershop} />
                <Route path="/gymcenter/:gymcenter_id" component={Gymcenter} />
                <Route path="/coach/:coach_id" component={Coach} />
                <Route path="/course/:course_id" component={Course} />
              </div>
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
    
  
}

export default App;
