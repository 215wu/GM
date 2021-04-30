import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";

import Img1 from "./images/sp1.png";
import Img2 from "./images/sp2.png";
import Img3 from "./images/sp3.png";
import Img4 from "./images/sp4.png";



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
            <Route exact path="/"  >
                <Home imgList={[Img1,Img2,Img3,Img4]}></Home>
            </Route>             
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={Home} />
            <Route path="/gymcenter" component={Home} />
            <Route path="/about" component={Home} />
            <Route path="/coach" component={Home} />
            <Route path="/course" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
    
  
}

export default App;
