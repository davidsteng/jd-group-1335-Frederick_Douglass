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
            spacing={5}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <img src={cover} width="240" height="400" />
                </Grid> 
                <Grid item xs={3}>
                    <Button component={Link} variant='contained' to="/epub" >Enter Book</Button>
                </Grid>   
                <Grid item xs={3}>
                    <Button variant='contained' >Preface</Button>  
                </Grid>  
                <Grid item xs={3}>
                    <Button variant='contained' >AutoBiograpy</Button>   
                </Grid>   
            </Grid> 
        </div>
    )
}

export default Home