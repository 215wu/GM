import React, { Component } from "react";
import { BrowserRouter, Route ,Redirect} from "react-router-dom";
import routes from "./model/routes/routes"
import './App.css';



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
            {
              routes.map((route,key)=>{
                if(route.exact){
                  return <Route key={key} exact path={route.path}>
                    <Redirect to="/home" />
                  </Route>
                }else{
                  return <Route key={key} path={route.path} 
                  render={
                    (props)=>(
                      <route.component {...props} routes={route.routes} />
                    ) 
                  }/>
                }
              })
            }
        </div>
      </BrowserRouter>
    );
  }
    
  
}

export default App;
