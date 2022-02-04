import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import cover from './cover.jpg'
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div style={{backgroundColor: 'tan'}}>
            <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <img src={cover} width="240" height="400" />
                </Grid> 
                <Grid item xs={3}>
                    <Button component={Link} variant='contained' to="/epub" style={{fontSize: 18}}>Enter Book</Button>
                </Grid>   
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Preface" style={{fontSize: 18}} >Preface</Button>  
                </Grid>  
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Letter" style={{fontSize: 18}}>Letter</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/Background" style={{fontSize: 18}}>Background</Button>
                </Grid>   
            </Grid> 
        </div>
    )
}

export default Home
