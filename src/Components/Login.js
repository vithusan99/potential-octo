import React, {Component} from 'react';
import {Button, Box, makeStyles, AppBar,Toolbar, Grid, Typography ,TextField, FormControl} from '@material-ui/core';
// import Success from './Success';
import Profile from './Profile';
// import Validation from './Validation'

const css={
    gr1:{
        backgroundColor:"#212121",
        padding:20,
        borderRadius:5,
        width:"85%"
        
    },
    t:{
        marginTop:100,
        },
    h2:{
        color:"#1976d2",
        fontSize:33,
    },
     box:{
          padding:25,
          backgroundColor:"white", 
          margin:40,
          height:400,
          width:"70%",
          borderRadius:8
     },
     field:{
         padding:20,
         color:"#01579b",
         backgroundColor:"#a7ffeb",
         borderRadius:9,
         maxWidth:"70%",
     },
     button1:{
         margin:25,
         backgroundColor:"blue",
         color:"white",
         
     }

};



class Login extends  Component {
       constructor(props){
           super(props);

           this.state={
               username:"",
               password:"",
               successful:false,
               message:""
           };

       }

       onChangeusername=(el) =>{
           this.setState(
               {
                   username:el.target.value
               }
           );
       }
      ;

       onChangepassword=(el) =>{
        this.setState(
            {
                password:el.target.value
            }
        );
    }


   

    handleLogin=(el) =>{
     
        el.preventDefault()
            
        if (this.state.username && this.state.password){
                        this.setState({
                            successful:true,
                            message:"success"

                        })
            localStorage.setItem('id','1');
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            this.props.history.push("/profile")
            window.location.reload();
        } 
        else {
            this.setState({
                message: "Required your Details"
            })
        }
        
    };


    

    render(){

        return(
<div> 
               
<Grid container style={css.t} >
<Grid xs={5}/>
<Grid  xs={2} sm={4}  style={css.gr1}>

<Box backgroundColor="white" style={css.box}>
    <h2 className={css.h2}>Login to Books Shop</h2>
<form Validate autoComplete="off"style={css.field} onSubmit={this.handleLogin}>
    <TextField required label="Username"  variant="filled" helperText="please enter username"
     value={this.state.username} onChange={this.onChangeusername}></TextField ><br/><br/>
  
    <TextField required label="Password" type="password" variant="filled" helperText="Please enter password" 
    value={this.state.password} onChange={this.onChangepassword} ></TextField>
</form>
<FormControl>
<Button style={css.button1} type='submit' onClick={this.handleLogin} > LOG IN</Button> 
</FormControl>
       {this.state.successful &&(<Profile/>)
                            
    //    <div>
    //         <Typography color='error' variant='overline' display='block' gutterBottom>
    //    <strong>{<Success/>}</strong></Typography>
    //     </div>
         

       }
</Box>
        
</Grid>
<Grid xs={5}/>

</Grid>
</div>
 )
}
}
export default Login


 


      
