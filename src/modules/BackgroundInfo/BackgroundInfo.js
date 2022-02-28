import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import FrederickDouglass1 from './FrederickDouglass1.jpg'

import {Link} from 'react-router-dom';


const BackgroundInfo = () => {
    return (
        <div style={{backgroundColor: 'tan'}}>
            <Grid
            container
            spacing={4}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '103vh' }}
            >
                <Grid item xs={3}>
                    <h1
                    style={{position: 'absolute', right: '44%', top: -20, fontSize: '4.0vh', }}
                    >
                        Background
                    </h1>
                </Grid> 
                <Grid item xs={3} 
                >
                    <p
                    style={{textAlign: 'center'}}>
                    <img src={FrederickDouglass1} width="100%" height="auto" display="block" margin-left="10" />
                    </p>
                </Grid> 
                <Grid item xs={3}>
                    <Button component={Link} variant='contained' to="/react-reader" style={{fontSize: 28}}>Home</Button>
                </Grid>   
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Preface" style={{fontSize: 28}} >Preface</Button>  
                </Grid>  
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Letter" style={{fontSize: 28}}>Letter</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Biography" style={{fontSize: 28}}>Biography</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Gallery" style={{fontSize: 28}}>Gallery</Button>
                </Grid>      
            </Grid> 
        </div>
    )
}

export default BackgroundInfo
