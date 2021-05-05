import About from "../../components/About";
import Coach from "../../components/Coach";
//import Content from "../../components/Content"
import Course from "../../components/Course";
//import Footer from "../../components/Footer";
import Gymcenter from "../../components/Gymcenter";
import Swipper from "../../components/Swipper";
//import TopBar from "../../components/TopBar";

import Home from "../../pages/Home"
import Login from "../../pages/Login"
import SignUp from "../../pages/SignUp"
import User from "../../pages/User"
import Admin from "../../pages/Admin"
import Coachuser from "../../pages/Coachuser"
import AdLogin from "../../pages/AdLogin"
import CoLogin from "../../pages/CoLogin"


let routes = [
    {
        path:"/",
        exact:true,
    },
    {
        path:"/home",
        component:Home,
        routes:[
            {
                path:"/home/",
                exact:true,
                component:Swipper
            },
            {
                path:"/home/about",
                component:About
            },
            {
                path:"/home/coach",
                component:Coach
            },
            {
                path:"/home/course",
                component:Course
            },
            {
                path:"/home/gymcenter",
                component:Gymcenter
            },
        ]
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/adminLogin",
        component:AdLogin
    },
    {
        path:"/coachLogin",
        component:CoLogin
    },
    {
        path:"/signUp",
        component:SignUp
    },
    {
        path:"/user/:uid",
        component:User
    },
    {
        path:"/admin/:aid",
        component:Admin
    },
    {
        path:"/coachUser/:cid",
        component:Coachuser
    },
];
 export default routes;
 