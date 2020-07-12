import React, {Component} from 'react'
import { Grid, Paper,Box, TextField,Table,TableContainer,TableHead,TableRow,TableCell,TableBody, Divider,makeStyles, Button } from '@material-ui/core'
import { Search, WallpaperSharp, Router } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Editbook from './Editbook';




function createData(title,author,isbn,price,language,genre,action){
    return{title,author,isbn,price,language,genre,action}
}
 const rows=[
     createData('Spring in Action',"Craig Walls",9475984393,1380,'Russian','Biography',<Button onClick={<Editbook/>} href="/editbook">< EditIcon/></Button>),
     createData('Spring Microservices in Action 1','John Carnell 1',7652987,4887,'English','Technology',<Button onClick={<Editbook/>} href="/editbook">< EditIcon/></Button>),
     createData('Spring Microservices in Action 1','John Carnell 1',7652987,4887,'English','Technology',<Button onClick={<Editbook/>} href="/editbook">< EditIcon/></Button>),
     createData('Spring Microservices in Action 1','John Carnell 1',7652987,4887,'English','Technology',<Button onClick={<Editbook/>} href="/editbook">< EditIcon/></Button>),
     createData('Spring Microservices in Action 1','John Carnell 1',7652987,4887,'English','Technology',<Button onClick={<Editbook/>} href="/editbook">< EditIcon/></Button>),
 ]

 const useStyles = makeStyles({
    // table: {
    //   width:"80%",
    // },
    content:{
        backgroundColor:"black",
        margin:100
    },
    contain:{
        backgroundColor:"white",
        margin:20,
        width:1500
    },
    paper:{
        boxShadow:20,
        margin:20,
        width:1100
    }
  });


 export default function Booklist(props){

    const classes=useStyles();

    return(
            <Grid container>
                <Grid xs={2}/>
                <Grid container xs={8} className={classes.content}>
                    <Grid className={classes.contain}>
                <Grid container xs={12}>
                <Grid xs={2}><ListIcon/>Book List</Grid><Grid xs={6}/>
                <Grid xs={4}><SearchIcon/><TextField type="search" label="Search text..."/></Grid>
                </Grid>
                
        <TableContainer component={Paper} className={classes.paper} >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">ISBN Number</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Language</TableCell>
              <TableCell align="left">Genre</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="left">{row.isbn}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.language}</TableCell>
                <TableCell align="left">{row.genre}</TableCell>
                <TableCell align="left">{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid >
      </Grid>
      <Grid xs={2}/>
      </Grid>

    )
 }















































// const style={
//     paper:{
//         backgroundColor:"black"
//     },
//     box:{
//         backgroundColor:"white",
//         padding:30,
//         margin:20,
//         fontSize:20
//     }
// }




// export class Booklist extends Component{
//     var 
//     render(){
//         // const createData=(name,calories,fat,carbs,protien)
//         // const rows = [
//         //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//         //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//         //     createData('Eclair', 262, 16.0, 24, 6.0),
//         //     createData('Cupcake', 305, 3.7, 67, 4.3),
//         //     createData('Gingerbread', 356, 16.0, 49, 3.9),
//         //   ];
//         const row=[{
//                 Title:"S"
//         }]
//         return(
//             <Grid container>
//                 <Grid xs={2}/>
//                 <Grid container xs={8} style={style.paper}>
//                     <Grid container style={style.box}>
//                                 <Grid xs={2}><ListIcon /><strong>Book List</strong></Grid>
//                                 <Grid xs={6}/>
//                                 <Grid xs={4}>
//                                     <TextField type="search" label={<SearchIcon/>} variant="outlined" fullWidth></TextField>
//                                 </Grid>
//                     </Grid>
//                     <Grid container style={style.list}>
                    
 
//                     </Grid>
//                 </Grid>
//                 <Grid xs={2}/>
//               </Grid>  
//         )
//     }
// }



// <TableContainer component={Paper}>
//                             <Table  aria-label="simple table">
//                                 <TableHead>
//                                 <TableRow>
//                                     <TableCell>Dessert (100g serving)</TableCell>
//                                     <TableCell align="left">Calories</TableCell>
//                                     <TableCell align="left">Fat&nbsp;(g)</TableCell>
//                                     <TableCell align="left">Carbs&nbsp;(g)</TableCell>
//                                     <TableCell align="left">Protein&nbsp;(g)</TableCell>
//                                 </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {rows.map((row) => (
//                                         <TableRow key={row.name}>
//                                         <TableCell component="th" scope="row">
//                                             {row.name}
//                                         </TableCell>
//                                         <TableCell align="left">{row.calories}</TableCell>
//                                         <TableCell align="left">{row.fat}</TableCell>
//                                         <TableCell align="left">{row.carbs}</TableCell>
//                                         <TableCell align="left">{row.protein}</TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>        
//                     </TableContainer>