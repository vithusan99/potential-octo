import React, {Component} from 'react'
import { Grid,TextField,Button,Box, Typography,form } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Success from './Success'
import validation from './Validation'

const style={
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
          height:500,
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



export default class Signin extends Component {
       constructor(props){
           super(props);

           this.state={
               username:"",
               password:"",
               email:"",
               message:"",
               successful:false,
           };

       }

       onChangeusername=(e) =>{
           this.setState(
               {
                   username:e.target.value
               }
           );
       }
      ;

       onChangepassword=(e) =>{
        this.setState(
            {
                password:e.target.value
            }
        );
    }


    onChangeemail=(e) =>{
        this.setState(
            {
                email:e.target.value
            }
        );
    }
   

    handleSignin=(e) =>{
        e.preventDefault();
            
        if (this.state.username && this.state.password && this.state.email){
            console.log("username" + this.state.username)
            console.log("password" + this.state.password)
            console.log("email" + this.state.email)
            this.setState({
                successful:true,
            })
            localStorage.setItem('id','1');
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
            this.props.history.push("/profile")
            window.location.reload();
        }
        //  else {
        //         <validation/>
        // }
        
    };


    render(){
        return(
           <div> 
               
                    <Grid container style={style.t} >
                    <Grid xs={5}/>
                <Grid  xs={2} sm={4}  style={style.gr1}>
                
                    <Box backgroundColor="white" style={style.box}>
                        <h2 className={style.h2}>Register Account at Books Shop</h2>
                    <form Validate autoComplete="off"style={style.field} onSubmit={this.handleSignin}>
                        <TextField required label="Username"  variant="filled" helperText="please enter username"
                         value={this.state.username} onChange={this.onChangeusername}></TextField ><br/><br/>
                        <TextField required label="E-mail" type="search" variant="filled" helperText="Please enter email" 
                        value={this.state.email} onChange={this.onChangeemail} ></TextField><br/><br/>
                        <TextField required label="Password" type="password" variant="filled" helperText="Please enter password" 
                        value={this.state.password} onChange={this.onChangepassword} ></TextField>
               
                    <Button style={style.button1} type='submit'  onClick={this.handleSignin} > SIGN UP</Button>
                    </form> 
                           {/* {this.state.message &&(
                           <div>
                                <Typography color='er'ror' variant='overline' display='block' gutterBottom>
                           <strong>{this.state.message}</strong></Typography>
                            </div>
                           )} */}
                    </Box>
                            
                </Grid>
                <Grid xs={5}/>
                
                </Grid>
                </div>
                
        )
        
    }
}