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
    import Book from "../../components/User/Book"
    import Update from "../../components/User/Update"
    import PurVip from "../../components/User/PurVip"
    import PurCourse from "../../components/User/PurCourse"
    import Search from "../../components/User/Search"
    import Welcome from "../../components/User/Welcome"

import Admin from "../../pages/Admin"
    import UpdateAdInfo from "../../components/Admin/UpdateAdInfo"
    import WelcomAdmin from "../../components/Admin/WelcomAdmin"
    import ManPuRe from "../../components/Admin/ManPuRe"
    import ManBoRe from "../../components/Admin/ManBoRe"
    import ManAb from "../../components/Admin/ManAb"
    import ManAd from "../../components/Admin/ManAd"
    import ManCo from "../../components/Admin/ManCo"
    import ManGymc from "../../components/Admin/ManGymc"
    import ManMa from "../../components/Admin/ManMa"
    import ManNo from "../../components/Admin/ManNo"
    import ManRo from "../../components/Admin/ManRo"
    import ManUser from "../../components/Admin/ManUser"

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
        component:User,
        routes:[
            {
                path:"/user/:uid/",
                exact:true,
                component:Welcome
            },
            {
                path:"/user/:uid/purCourse",
                component:PurCourse
            },
            {
                path:"/user/:uid/purVip",
                component:PurVip
            },
            {
                path:"/user/:uid/update",
                component:Update
            },
            {
                path:"/user/:uid/bookGym",
                component:Book
            },
            {
                path:"/user/:uid/search",
                component:Search
            }
        ]
    },
    {
        path:"/admin/:aid",
        component:Admin,
        routes:[
            {
                path:"/admin/:aid/manageBookRecord",
                component:ManBoRe
            },
            {
                path:"/admin/:aid/managePurchaseRecord",
                component:ManPuRe
            },
            {
                path:"/admin/:aid/manageUser",
                component:ManUser
            },
            {
                path:"/admin/:aid/manageCoach",
                component:ManCo
            },
            {
                path:"/admin/:aid/manageAdmin",
                component:ManAd
            },
            {
                path:"/admin/:aid/updateInfo",
                component:UpdateAdInfo
            },{
                path:"/admin/:aid/",
                exact:true,
                component:WelcomAdmin
            },
            {
                path:"/admin/:aid/manageAbout",
                component:ManAb
            },
            {
                path:"/admin/:aid/manageNotify",
                component:ManNo
            },
            {
                path:"/admin/:aid/manageMachine",
                component:ManMa
            },
            {
                path:"/admin/:aid/manageGymcenter",
                component:ManGymc
            },
            {
                path:"/admin/:aid/manageRoom",
                component:ManRo
            }
        ]
    },
    {
        path:"/coachUser/:cid",
        component:Coachuser
    },
];
 export default routes;
 