import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import homeicon from '../../assets/homeicon.png'
import FrederickDouglass1 from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Frederick Douglass/FrederickDouglass1.jpg'
import FrederickDouglass2 from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Frederick Douglass/FrederickDouglass2.jpg'
import FrederickDouglass3 from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Frederick Douglass/FrederickDouglass3.jpg'
import JadonBillups from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Readers - Words and Definitions/JadonBillups.jpg'
import RonadDoe from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Readers - Words and Definitions/RonadDoe Jr.jpg'
import ZakimyaHolmes from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Readers - Words and Definitions/ZakimyaHolmes.jpg'
import ss1 from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Slavery in the South/Slavery in the South 8.jpg'
import ss2 from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Slavery in the South/Slavery in the South 17.jpg'
import ss3 from '/Users/Tan/Documents/GitHub/PeerPops.io/jd-group-1335/src/assets/background pics/Slavery in the South/Slavery in the South 18.jpg'

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
            <img src={FrederickDouglass1} width="200" height="200" ></img>
            <img src={FrederickDouglass2} width="200" height="200" ></img>
            <img src={FrederickDouglass3} width="200" height="200" ></img>
            <h3
            style={{textAlign: 'left'}}
            >Slavery In The South</h3>
            <img src={ss1} width="400" height="400" ></img>
            <img src={ss2} width="400" height="400" ></img>
            <img src={ss3} width="400" height="400" ></img>
            <h4
            style={{textAlign: 'left'}}
            >Readers</h4>
            <img src={JadonBillups} width="200" height="200" ></img>
            <p>
                &emsp;Jadon Billups
            </p>
            <img src={RonadDoe} width="200" height="200" ></img>
            <p>
                &emsp;Ronad Doe
            </p>
            <img src={ZakimyaHolmes} width="200" height="200" ></img>
            <p>
                &emsp;Zakimya Holmes
            </p>
       </div>
    )        
}

export default Background