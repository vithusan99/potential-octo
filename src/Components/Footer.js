import React from 'react'
import {Button, Box, makeStyles, AppBar,Toolbar, Grid } from '@material-ui/core';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/Collections'

const new1Style=makeStyles({
botbar:{
  position:"fixed",
    backgroundColor:"#33ccff",
    color:"white",
    width:"100%",
    height:300,
    fontSize:20,
    bottom:0,
    left:0
}
// },
// hover:botbar:{
//    color:"red"
// }
} );           


function Footer(){

  const classes= new1Style();
  // let fullYear=new Date(). getFullYear();
return(

        // <Box  textAlign="center">
        // <AppBar position={"fixed"} className={classes.botbar}  >{fullYear}-{fullYear+1}, ALL RIGHT RESERVED BY ANITH</AppBar>
        // </Box>
        <Box className={classes.botbar}  >
         <Grid container>
           <Grid xs={3}  >
          <p>Contact Us</p>
         <p> Social media links:</p>
         <p> E-mail Address:</p>
          
          </Grid>
          <Grid xs={3}/>
          <Grid xs={3}><p>About Us :</p></Grid>
          </Grid>
          
        </Box>

)

}
export default Footer