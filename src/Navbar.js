import React from 'react'
import {Button, Box, makeStyles, AppBar,Toolbar, Grid } from '@material-ui/core';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/Collections'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Login from "./components/Login";
// import Signin from "./components/Signin";
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import BoardUser from "./components/BoardUser";
// import BoardAdmin from "./components/BoardAdmin";
// import { AccountCircle } from "@material-ui/icons";
// import Footer from "./components/Footer";

// const useStyle=makeStyles({
// appbar:{
//     backgroundColor:"black",
//     color:"white",
//     fontSize:34,
//     fontFamily:"fontFamily"
// },
// nav:{
//     color:"white",
//     fontSize:22,
// },
// book:{
//     fontSize:30,
//     paddingTop:5
// },
// });


// function Navbar(){
//     const   style=useStyle();
// return(
//     <Router>
//         <div>
//     <AppBar position="fixed">
//     <Grid container className={style.appbar} >
//         <Grid container xs={2}  > 
//       <Grid xs={3}><CollectionsBookmarkOutlinedIcon/></Grid>
//     <Grid xs={6} className={style.book}>Book Shop</Grid>
//     <Grid xs={3}>
//     <Button className={style.nav} href="/home">Home</Button>
//     </Grid>
//     </Grid>
//     <Grid xs={8}/>
//     <Grid container xs={2} >
//         <Grid xs={6} ><Button className={style.nav} href="/login"> Login</Button></Grid>
//         <Grid xs={6} ><Button className={style.nav} href="./Signin" >Signup</Button></Grid>
//     </Grid>
//     </Grid>



// </AppBar>
// <div>
//             <Switch>
//               <Route exact path={["/", "/home"]} component={Home} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/Signin" component={Signin} />
//               <Route exact path="/profile" component={Profile} />
//               <Route path="/user" component={BoardUser} />
//               <Route path="/admin" component={BoardAdmin} />
//             </Switch>
//           </div>
//           <Footer/>
// </div>
// </Router>


// )
// }

// export default Navbar