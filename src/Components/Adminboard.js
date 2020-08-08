import React, {Component} from 'react';
import {Button, Box, makeStyles, AppBar,Toolbar, Grid, Typography ,TextField, FormControl, Paper} from '@material-ui/core';
import Success from './Success';
import Profile from './Profile';
import PeopleIcon from '@material-ui/icons/People';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyle= makeStyles({
    tot:{
        backgroundColor:"#212121",
        borderRadius:5,
        margin:50,
        

    },
    pan:{
        backgroundColor:"#3e2723",
        color:"white",
        boxShadow:10,
        borderRadius:3,
        margin:10,
        textAlign:"center",
        height:27,
        paddingTop:7,

    },
    man:{
        backgroundColor:"#5d4037",
        padding:4,
        margin:5,
   },
    but:{
        padding:4,

    },
    p:{
        color:"white"
    },
    but1:{
        paddingLeft:5,
        margin:5,
        backgroundColor:"white",
    },
    but2:{
        padding:4,
        backgroundColor:"white",
    }
    


});


export default function Admin(){

    const news =useStyle();

        return(
            <Grid container>
                <Grid xs={2}/>
                <Grid container xs={8} className={news.tot}>
                  <Grid xs={1}/> 
                  <Grid container xs={10}>
                 <Grid xs={12}><Paper className={news.pan}>Welcome To Admin Panel</Paper></Grid>
                 <Grid   xs={6} className={news.man} >
                     <Grid xs={12}><PeopleIcon style= {{fontSize:300}}/></Grid>
                     <Grid xs={12}><p className={news.p}>Manage Users</p></Grid>
                     <Grid xs={12} className={news.but}><Button className={news.but1}>ADD USER</Button><Button className={news.but2}>VIEW USERS</Button></Grid>
                 </Grid>
                 <Grid  xs={6} className={news.man} >
                     <Grid xs={12}><CollectionsBookmarkIcon style= {{fontSize:300}}/></Grid>
                     <Grid xs={12}><p className={news.p}>Manage Books</p></Grid>
                     <Grid  xs={12} className={news.but}><Button className={news.but1}>ADD BOOK</Button><Button className={news.but2}>VIEW BOOKS</Button></Grid>
                 </Grid>
                </Grid>
                 
                 <Grid xs={1}/>
                </Grid>
                <Grid xs={2}/>
            </Grid>
        )
}