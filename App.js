import React , {Component}  from'react' ;
import logo from './logo.svg';
import {Button, Box, makeStyles, AppBar,Toolbar, Grid } from '@material-ui/core';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/Collections'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Body from './Components/Body'
import HI from './Components/HI'
import Acecreed from './Components/Acecreed'
import State from './Components/State'
import First from './exercise/First'
import Condition1 from './Components/Condition1'
import SmallOne from './Components/SmallOne'
import LoginLogout from './Components/LoginLogout';
import NameList from './Components/Namelist';
import Stylesheet from './Components/Stylesheet'
import Forms from './Components/Forms'
import RefsDemo from './Components/Column';
import Sampleportal from './Components/Portsample';
import WithIncrement from './Components/Increment';
import DemoTable from './Components/Table';
// import RepositoryList from './Repository';
import Main from './Components/Main';
import Contact from './Components/Contact';
import HookCounter from './Components/Increment';
import HookPro from './Components/HookPrac';
// import Signup from './Components/Signup';
import Parent from './Components/Parent';
import Newone from './Components/Newone'
import EventBind from './Components/Ex';
import Navbar from './Components/Navbar';
import Success from './Components/Success';
import ParentComponent from './Components/Example1';

import Signin from "./Components/Signin";
import Mate from "./Components/Mate";
import Profile from "./Components/Profile";
// import BoardUser from "./components/BoardUser";
// import BoardAdmin from "./components/BoardAdmin";
import { AccountCircle, Block } from "@material-ui/icons";
import Footer from "./Components/Footer";
import Login from './Components/Login';
import Addbook from './Components/Addbook';
import Editbook from './Components/Editbook'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Booklist from './Components/Booklist';


const style={
appbar:{
    backgroundColor:"black",
    color:"white",
    fontFamily:"fontFamily",
    padding:8
},
nav:{
    color:"white",
    fontSize:20,
},
book:{
    fontSize:30,
},
};




  class App extends Component {
    constructor(props) {
      super(props);
      this.logOut = this.logOut.bind(this);
      this.state = {
             currentUser: undefined,
            }
      };
    
    componentDidMount=()=> {
      let user;
      if (localStorage.getItem('username')) {
        user = {
          username: localStorage.getItem('username'),
          id: localStorage.getItem('id'),
          email: localStorage.getItem('email'),
          roles:localStorage.getItem("ROLE_ADMIN"),
        };
      }
  
      if (user) {
        this.setState({
          currentUser: user,
          isLogedIn:true,
          // username:localStorage.getItem('username')
          // showAdminBoard: user.roles.includes("ROLE_ADMIN")
        });
      }
    }

    logOut=()=>{
      localStorage.clear()
    }

render=()=>{
    const {currentUser}=this.state;


return(
    <Router>
        <div>
    <AppBar position="fixed">
    <Grid container style={style.appbar}>
        <Grid container xs={4}  > 
    <Grid xs={4} style={style.book}><CollectionsBookmarkOutlinedIcon/>Book Shop</Grid>
    <Grid xs={2}>
    <Button style={style.nav} href="/home"><strong>HOME</strong></Button>
    </Grid>
    
    { currentUser && (<Grid container  xs={6} >
      <Grid xs={6} ><Button style={style.nav} href="/addBook"><strong>ADD BOOK</strong></Button></Grid>
                <Grid xs={6}><Button style={style.nav} href="/booklist"><strong>BOOK LIST</strong></Button></Grid>
                </Grid>)}
    </Grid>
    <Grid xs={6}/>
   
    {currentUser ? (
              <Grid container xs={2} >
    <Grid xs={6}><Button style={style.nav} href="/profile"> <strong><AccountCircle style={{fontSize:27}}/>{currentUser.username}</strong></Button></Grid>
               <Grid xs={6} ><Button style={style.nav} href="./login" onClick={this.logOut()}><strong>LOGOUT</strong></Button></Grid>
               </Grid> 
    ):( <Grid container xs={2}>
          <Grid xs={6} ><Button style={style.nav} href="/login"> <strong>LOGIN</strong></Button></Grid>
        <Grid xs={6} ><Button style={style.nav} href="./signin" ><strong>SIGNUP</strong></Button></Grid>
        </Grid>
          )}
    </Grid>

</AppBar>
<div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Mate} />
              <Route exact path={"/login"} component={Login} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/addBook" component={Addbook} />
              <Route path="/editBook" component={Editbook} />
              <Route path ="/success" component={Success}/>
              <Route path ="/booklist" component={Booklist}/>
            </Switch>
          </div>
          <Footer/>
</div>
</Router>


)
   }
   }        

          
export default App






