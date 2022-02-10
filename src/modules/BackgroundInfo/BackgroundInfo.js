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
            spacing={5}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <h1
                    style={{fontSize: '4.0vh', textAlign: 'center'}}
                    >
                        Background
                    </h1>
                </Grid> 
                <Grid item xs={3}
                >
                    <img src={FrederickDouglass1} width="100%" height="auto" textAlign= 'center'    />
                </Grid> 
                <Grid item xs={3}>
                    <Button component={Link} variant='contained' to="/react-reader" style={{fontSize: 18}}>Home</Button>
                </Grid>   
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Preface" style={{fontSize: 18}} >Preface</Button>  
                </Grid>  
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Letter" style={{fontSize: 18}}>Letter</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Biography" style={{fontSize: 18}}>Biography</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Gallery" style={{fontSize: 18}}>Gallery</Button>
                </Grid>      
            </Grid> 
        </div>
    )
}

export default BackgroundInfo
