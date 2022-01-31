import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import homeicon from '../../assets/homeicon.png'

const background = () => {
    return (
        <div style={{backgroundColor: 'gainsboro',  margin: 20}}>
            <h1
            style={{textAlign: 'center'}}
            >Background</h1>
            <Button
                style={{position: 'absolute', right: 23, top: 30}}
                component={Link} 
                to="/react-reader" >
                <img src={homeicon} width="40" height="40" ></img>
            </Button>
        </div>
    )        
}

export default background 