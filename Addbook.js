import React, { Component } from 'react';
import {Button, Box, makeStyles, AppBar,Toolbar, Grid, Typography } from '@material-ui/core';
import Container1 from './Container';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { SvgIcon } from '@material-ui/core';

class Addbook extends Component {
    constructor(props){
        super(props);
        this.state = {
         content1: "",
         content2:"",
    };
}
  

  componentDidMount(props) {
        this.setState({
        content1: <AddBoxIcon/>+" Add New Book",
          content2:"Save"
                  
        });
  }

  render() {


    return (
      <Container1 content1={this.state.content1}
      content2={this.state.content2}/>
    );
  }
}

  
export default Addbook