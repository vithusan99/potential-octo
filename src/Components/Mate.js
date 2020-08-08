import React from 'react';
import {Button, Box, makeStyles, AppBar,Toolbar, Grid } from '@material-ui/core';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/Collections'
import Signin from './Signin';




const useStyle =makeStyles({
    root:{
          color:"white",
          paddingTop:20,
          margin:50
           
    },
    box1:{
           backgroundColor:"#212121",
    },
    box2:{
        padding:20,
        margin:35
    },
    in:{
        padding:20
    },

  
 
    


})




 function Mate(){
        const style=useStyle();

        return  (
    <div>
       
     
     {/* <Box className={style.root}>
         <Grid container >
             <Grid xs={3}/>
             <Grid xs={6} className={style.box1}>
                 <Box className={style.box2} boxShadow={10}>
         <Box fontSize={50} className={style.in} color={'#ff7043'}>Welcome to Book Shop</Box>
         <Box fontSize={20} color={'#ff6e40'}>Good friends, good books, and a sleepy conscience: this is the ideal life.<br/><br/>
          -Mark Twain </Box>
                 </Box>
           </Grid>
           <Grid xs={3}/>
         </Grid>
     </Box> */}
     
     </div>
    
        )
    
}

export default Mate


















// class Mate extends Component{
//     render(){

//     }
// }
// export default Mate