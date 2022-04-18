import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import homeicon from '../../assets/homeicon.png'
import FrederickDouglass1 from './BackgroundPics/FrederickDouglass1.jpg' 
import FrederickDouglass2 from './BackgroundPics/FrederickDouglass2.jpg'
import FrederickDouglass3 from './BackgroundPics/FrederickDouglass3.jpg'
import JadonBillups from './BackgroundPics/JadonBillups.jpg'
import RonadDoe from './BackgroundPics/RonadDoe Jr.jpg'
import ZakimyaHolmes from './BackgroundPics/ZakimyaHolmes.jpg'
import AngelaPrince from './BackgroundPics/Angela Prince.jpg'
import AngelSmith from './BackgroundPics/Angel Smith.jpg'
import MichaelStaples from './BackgroundPics/Michael Staples.jpg'
import PhreeNorde from './BackgroundPics/Phree Norde.jpeg'
import RoderickDavis from './BackgroundPics/Roderick Davis.jpg'
import MorrisPorter from './BackgroundPics/Morris Porter.jpg'
import RoderickPrince from './BackgroundPics/Roderick Prince audio engineer.jpg'
import ss1 from './BackgroundPics/Slavery in the South 8.jpg'
import ss2 from './BackgroundPics/Slavery in the South 17.jpg'
import ss3 from './BackgroundPics/Slavery in the South 18.jpg'


const Gallery = () => {
    return (
        <div style={{backgroundColor: 'gainsboro',  margin: 20, fontSize: '4.0vh'}}>
            <h1
            style={{textAlign: 'center'}}
            >Gallery</h1>
            <Button
                style={{position: 'absolute', right: 20, top: 30}}
                component={Link} 
                to="/BackgroundInfo" >
                <img src={homeicon} width="40" height="40" ></img>
            </Button>
            <h2
            style={{textAlign: 'center'}}
            >Frederick Douglass</h2>
            <img src={FrederickDouglass1} width="25.2%" height="auto" ></img>
            <img src={FrederickDouglass2} width="28.6%" height="auto" ></img>
            <img src={FrederickDouglass3} width="46%" height="auto" ></img>
            <h3
            style={{textAlign: 'center'}}
            >Slavery In The South</h3>
            <img src={ss1} width="33.4%" height="auto" ></img>
            <img src={ss2} width="29%" height="auto" ></img>
            <img src={ss3} width="37.3%" height="auto" ></img>
            <h4
            style={{textAlign: 'center'}}
            >Readers</h4>
            <p
            style={{textAlign: 'center'}}
            >
                <img src={JadonBillups} width="25%" height="auto"  textAlign= 'center'></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Jadon Billups
            </p>
            <p
            style={{textAlign: 'center'}}
            >
                <img src={ZakimyaHolmes} width="25%" height="auto" ></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Zakimya Holmes
            </p>
            <p
            style={{textAlign: 'center'}}
            >
                <img src={RonadDoe} width="25%" height="auto" ></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Ronad Doe
            </p>

            <p
            style={{textAlign: 'center'}}
            >
                <img src={MichaelStaples} width="25%" height="auto" ></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Michael Staples
            </p>
            <p
            style={{textAlign: 'center'}}
            >
                <img src={AngelaPrince} width="25%" height="auto" ></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Angela Prince
            </p>

            <p
            style={{textAlign: 'center'}}
            >
                <img src={RoderickDavis} width="25%" height="auto" ></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Roderick Davis
            </p>

            <p
            style={{textAlign: 'center'}}
            >
                <img src={PhreeNorde} width="25%" height="auto" ></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Phree Norde
            </p>
            
            <p
            style={{textAlign: 'center'}}
            >
                <img src={AngelSmith} width="25%" height="auto" ></img>
            </p>
            <p
            style={{textAlign: 'center'}}>
                &emsp;Angel Smith
            </p>

            <p
            style={{textAlign: 'center'}}
            >
                <img src={MorrisPorter} width="25%" height="auto" ></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Morris Porter
            </p>


            <h4
            style={{textAlign: 'center'}}
            >Audio Engineer</h4>

            <p
            style={{textAlign: 'center'}}
            >
                <img src={RoderickPrince} width="25%" height="auto" ></img>
            </p>
            
            <p
            style={{textAlign: 'center'}}>
                &emsp;Roderick Prince
            </p>
       </div>
    )        
}

export default Gallery
