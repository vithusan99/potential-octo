import React from 'react';
import {Button, Box, Grid, Typography, Container, Card, TextField, Paper, backgroundColors ,MenuItem,makeStyles} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import ListIcon from '@material-ui/icons/List';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { SvgIcon } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyle=makeStyles({
        paper:{
            marginTop:80,
            backgroundColor:"black",
            borderRadius:7,
        },
        card:{
            backgroundColor:"#a7ffeb",
            color:"black",
            padding:40,
            margin:20,
            borderRadius:15,
            boxShadow:100,
        },
        submit:{
            paddingTop:50
        },
        field:{
            width:500
        },
        bot:{
            width:310
        }
})

function Container1 (props){
       const style=useStyle();

    return(
        <React.Fragment>
        <div>
        <Grid container>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
                <Paper className={style.paper}>
                    <Card className={style.card}>
                        <form>
                        <Grid container xs={12} >
                            {props.content1}
                        </Grid><br/><br/>
                        <Grid container xs={12} >
                            <Grid xs={6}><TextField required className={style.field} label="Tiitle"  variant="outlined" helperText="Enter Book Title"></TextField></Grid>
                            <Grid xs={6}><TextField required className={style.field} label="Author"  variant="outlined" helperText="Enter Book Author"></TextField></Grid>
                        </Grid>
                        <Grid container xs={12} >
                                <Grid xs={6}><TextField required className={style.field} label="Cover Photo URL"  variant="outlined" helperText="Enter Book Cover Photo URL"></TextField></Grid>
                                <Grid xs={6}><TextField required className={style.field} label="ISBN Number"  variant="outlined" helperText="Enter Book ISBN Number"></TextField></Grid>
                        </Grid>
                        <Grid container xs={12} >
                            <Grid xs={4}><TextField required className={style.bot} label="Price"  variant="outlined" helperText="Enter Book Price"></TextField></Grid>
                            <Grid xs={4}><TextField select className={style.bot} label=" Langauage"  variant="outlined" helperText="Please select your Language"><MenuItem>Select Language</MenuItem></TextField></Grid>
                            <Grid xs={4}><TextField select className={style.bot} label="Genre"  variant="outlined" helperText="Please selesct your Genre">
                                        <MenuItem>Select Genre</MenuItem>
                                        <MenuItem>Fiction</MenuItem>
                                        <MenuItem>Story</MenuItem>
                                        <MenuItem>History</MenuItem>
                                        </TextField></Grid>
                        </Grid>
                        </form>
                        <Grid container xs={12} spacing={2}>
                            <Grid xs={8}/>
                            <Grid container xs={4} spacing={2} className={style.submit}>
                            <Grid  xs={4} ><Button style={{backgroundColor:'#76ff03'}}><SaveIcon style={{fontSize:25}}/>{props.content2}</Button></Grid>
                            <Grid xs={4}><Button style={{backgroundColor:'#1769aa'}}>< SettingsBackupRestoreIcon style={{fontSize:25}}/>RESET</Button></Grid>
                            <Grid xs={4}><Button style={{backgroundColor:'#1769aa'}}>< ListIcon style={{fontSize:25}}/>BOOK LIST</Button></Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Paper>
            </Grid>
            <Grid xs={2}/>
            </Grid>
        </div>
        </React.Fragment>
    )
}

export default Container1