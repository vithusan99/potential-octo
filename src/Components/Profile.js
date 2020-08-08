import React, { Component } from "react";
import { Typography, Card, CardContent, Paper, Grid, makeStyles ,Box ,colors} from '@material-ui/core';

    const style={
       
        paper:{
            padding:10,
            backgroundColor:"black",
            height:300,
            marginTop:150,
            color:"#f44336",
            borderRadius:10
        }
    }






export default class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentUser: {
          username: localStorage.getItem('username'),
          id: localStorage.getItem('id'),
          email: localStorage.getItem('email'),
          roles:localStorage.getItem("roles"),
        }
      };
    }


    render(){
         const {currentUser}=this.state;

        return(
            <>
            <Grid container>
                <Grid xs={1}/>
                <Grid xs={10}>
                        <Paper style={style.paper}>
                         <Typography>
                         <h1>
                            <strong>Profile: </strong>{currentUser.username}
                         </h1>
                         </Typography><br/>
                        <h3><strong>Id:</strong>{" "}{currentUser.id}</h3><br/>
                        <h3><strong>Email:</strong>{" "}{currentUser.email}</h3><br/>
                        <h3><strong>Authorities:</strong>{" "}{currentUser.roles}</h3>
                         </Paper>
                    

                </Grid>
                <Grid xs={1}/>

            </Grid>
            </>
        )
    }

}
