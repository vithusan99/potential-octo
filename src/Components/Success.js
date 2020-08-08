import React from 'react';
import {Button, Box, makeStyles, AppBar,Toolbar, Grid, Typography } from '@material-ui/core';


const suStyle=makeStyles({

    success:{
           backgroundColor:"black",
          marginTop:50,
          height:90,
          borderRadius:8,
          boxShadow:10,
          boxShadow:"black"

    },
    white:{
        backgroundColor:"#a7ffeb",
        color:"blue",
        width:70,
        height:"70%",
        marginTop:15,
        borderRadius:8,
        boxShadow:10,
    },
    text:{
        padding:10,
        top:10,
        marginTop:15,
        
    }
})


function Success(props){
    const   classes2=suStyle();

    return(
    <div>
        <Grid container>
            <Grid xs={3}/>
            <Grid xs={6}>
                <Grid container className={classes2.success}>
                   <Grid xs={2}/>
                   <Grid xs={8} className={classes2.white}>
                       <Box className={classes2.text}>
                      <Typography ><strong>USER REGISTERED SUCCESSFULLY!</strong></Typography>
                      </Box>
                   </Grid>
                   <Grid xs={2}/>
                </Grid>
            </Grid>
            <Grid xs={3}/>
        </Grid>
    </div>
    )
}
export default Success