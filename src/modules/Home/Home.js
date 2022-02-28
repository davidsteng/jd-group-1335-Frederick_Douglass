import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import FrederickDouglass2 from './FrederickDouglass2.jpg'
import cover from './cover.jpg'
import {Link} from 'react-router-dom';


const Home = () => {
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
                        Narrative of the Life of Frederick Douglass, an American Slave
                    </h1>
                </Grid> 
                <Grid item xs={3}
                >
                    <img src={FrederickDouglass2} width="100%" height="auto" textAlign= 'center'    />
                </Grid> 
                <Grid item xs={3}>
                    <Button component={Link} variant='contained' to="/epub" style={{fontSize: 32}}>Enter Book</Button>
                </Grid>   
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/BackgroundInfo" style={{fontSize: 32}}>Background</Button>
                </Grid>   
                <Grid item xs={3}>
                    <Button component={Link} variant='contained'to="/BackgroundInfo" style={{fontSize: 32}}>Help</Button>
                </Grid>   
            </Grid> 
        </div>
    )
}

export default Home
