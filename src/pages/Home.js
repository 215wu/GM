import  { Component } from "react";
//import { withRouter} from "react-router-dom";
import { Route} from "react-router-dom";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
//import Content from "../components/Content"



class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        console.log(this.props);
        console.log(this);
    }

    render(){
        return(
             <div className="Home">
                <TopBar/>
                    {
                        this.props.routes.map((route,key)=>{
                            if(route.exact){
                                return <Route key={key} exact path={route.path} component={route.component}/>
                            }else{
                                return <Route key={key} path={route.path} component={route.component}/>
                            }
                        })
                    }
                <Footer/>
             </div>
            
            
        );
    }
}

export default Home;