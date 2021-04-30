import React, { Component } from "react";
//import { withRouter} from "react-router-dom";
import { withRouter , Switch , Route} from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
//import Content from "../components/Content"
import Swipper from "../components/Swipper";
import About from "../components/About";
import Gymcenter from "../components/Gymcenter";
import Coach from "../components/Coach";
import Course from "../components/Course";



class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            images:this.props.imgList
        }
    }

    render(){
        return(
             <div className="Home">
                <TopBar></TopBar>
                <Switch>
                    <Route exact path="/" >
                        <Swipper imgList={this.state.images}></Swipper>
                    </Route>                  
                    <Route path="/home">
                        <p style={{fontSize:"3rem",color:"white"}}>登录之后的页面</p>
                    </Route>               
                    <Route path="/about" component={About} />
                    <Route path="/gymcenter" component={Gymcenter} />
                    <Route path="/coach" component={Coach} />
                    <Route path="/course" component={Course} />
                </Switch>
                <Footer></Footer>
             </div>
            
            
        );
    }
}

export default withRouter(Home);