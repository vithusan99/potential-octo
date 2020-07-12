import React from 'react'
import {Button, Box, makeStyles, AppBar,Toolbar, Grid } from '@material-ui/core';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/Collections'

const new1Style=makeStyles({
botbar:{
    backgroundColor:"black",
    color:"white",
    width:"100%",
    top:"auto",
    bottom:0,
    height:30,
    paddingTop:5
}  
} );           


function Footer(){

  const classes= new1Style();
  let fullYear=new Date(). getFullYear();
return(

        <Box  textAlign="center">
        <AppBar position={"fixed"} className={classes.botbar}  >{fullYear}-{fullYear+1}, ALL RIGHT RESERVED BY ANITH</AppBar>
        </Box>

)

}
export default Footer