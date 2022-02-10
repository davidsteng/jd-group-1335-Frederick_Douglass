import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import homeicon from '../../assets/homeicon.png'

const Biography = () => {
    return (
        <div style={{backgroundColor: 'gainsboro',  margin: 20, fontSize: '4.0vh'}}>
            <h1
            style={{textAlign: 'center'}}
            >BIOGRAPHY</h1>
            <Button
                style={{position: 'absolute', right: 20, top: 30}}
                component={Link} 
                to="/BackgroundInfo" >
                <img src={homeicon} width="40" height="40" ></img>
            </Button>    
            <p>
                &emsp;FREDERICK DOUGLASS (February 1818—February 20, 1895)
was born into slavery at Tuckahoe, Maryland, of a white father and a slave
mother. After successfully fleeing to New York and then Massachusetts in
1838, he soon became active in the anti-slavery cause. He founded a
newspaper, The North Star, and during the 1840s and 1850s was at the
forefront of anti-slavery activities.
            </p>
            <p>
                &emsp;After the Civil War, Douglass became a champion of black
enfranchisement and civil rights, writing and arguing eloquently for
educational opportunities, military privileges, and the rights of blacks in
labor. He was closely identified with the Republican Party and held
numerous offices, including that of Minister Resident and Consul General
to Haiti.
            </p>
            <p>
                &emsp;As a writer, Douglass produced three autobiographies, Narrative of
the Life of Frederick Douglass (1845), My Bondage and My Freedom
(1855), and Life and Times of Frederick Douglass (1881, enlarged in 1892). 
            </p>
            <p>
                &emsp;A firm believer in the equality of all people, whether black, female,
Native American or recent immigrant, Frederick Douglass famously said: “I
will unite with anybody to do right and with nobody to do wrong.”
</p>
            <p>
                &emsp;Frederick Douglass had a stature in the 19th century comparable to
that of Martin Luther King in the 20th century. 
            </p>
            
        </div>
    )
}

export default Biography
