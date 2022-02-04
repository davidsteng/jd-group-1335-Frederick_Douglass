import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import homeicon from '../../assets/homeicon.png'

const Background = () => {
    return (
        <div style={{backgroundColor: 'gainsboro',  margin: 20, fontSize: '4.0vh'}}>
            <h1
            style={{textAlign: 'center'}}
            >Background</h1>
            <Button
                style={{position: 'absolute', right: 20, top: 30}}
                component={Link} 
                to="/react-reader" >
                <img src={homeicon} width="40" height="40" ></img>
            </Button>
            <h2
            style={{textAlign: 'left'}}
            >Frederick Douglass</h2>
            <img
            src = "">/</img>
        </div>
    )        
}

export default Background