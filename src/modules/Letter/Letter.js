import React from 'react'
import {Stack} from '@mui/material';
import {Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import homeicon from '../../assets/homeicon.png'

const Letter = () => {
    return (
        <div style={{backgroundColor: 'white',  margin: 20, fontSize: '120%'}}>
            <h1
            style={{textAlign: 'center'}}
            >LETTER FROM WENDELL PHILLIPS, ESQ.</h1>
            <Button
                style={{position: 'absolute', right: 20, top: 30}}
                component={Link} 
                to="/BackgroundInfo" >
                <img src={homeicon} width="40" height="40" ></img>
            </Button>    
            <p>
                &emsp;My Dear Friend:
            </p>
            <p>
                &emsp;You remember the old fable of “The Man and the Lion,” where the lion complained that he should not be so misrepresented “when the lions wrote history.”
            <br></br>
                &emsp;I am glad the time has come when the “lions write history.” We have been left long enough to gather the character of slavery from the involuntary evidence of the masters. One might, indeed, rest sufficiently satisfied with what, it is evident, must be, in general, the results of such a relation, without seeking farther to find whether they have followed in every instance. Indeed, those who stare at the half-peck of corn a week, and love to count the lashes on the slave’s back, are seldom the “stuff” out of which reformers and abolitionists are to be made. I remember that, in 1838, many were waiting for the results of the West India experiment, before they could come into our ranks. Those “results” have come long ago; but, alas! few of that number have come with them, as converts. A man must be disposed to judge of emancipation by other tests than whether it has
 increased the produce of sugar,—and to hate slavery for other reasons than because it starves men and whips women,—before he is ready to lay the first stone of his anti- slavery life.
            <br></br>
                &emsp;I was glad to learn, in your story, how early the most neglected of God’s children waken to a sense of their rights, and of the injustice done them. Experience is a keen teacher; and long before you had mastered your A B C, or knew where the “white sails” of the Chesapeake were bound, you began, I see, to gauge the wretchedness of the slave, not by his hunger and want, not by his lashes and toil, but by the cruel and blighting death which gathers over his soul.
            <br></br>    
                &emsp;In connection with this, there is one circumstance which makes your recollections peculiarly valuable, and renders your early insight the more remarkable. You come from that part of the country where we are told slavery appears with its fairest features. Let us hear, then, what it is at its best estate—gaze on its bright side, if it has one; and then imagination may task her powers to add dark lines to the picture, as she travels southward to that (for the colored man) Valley of the Shadow of Death, where the Mississippi sweeps along.
            <br></br>
                &emsp;Again, we have known you long, and can put the most entire confidence in your truth, candor, and sincerity. Every one who has heard you speak has felt, and, I am confident, every one who reads your book will feel, persuaded that you give them a fair specimen of the whole truth. No one-sided portrait,—no wholesale complaints,—but strict justice done, whenever individual kindliness has neutralized, for a moment, the deadly system with which it was strangely allied. You have been with us, too, some years, and can fairly compare the twilight of rights, which your race enjoy at the North, with that “noon of night” under which they labor south of Mason and Dixon’s line. Tell us whether, after all, the half-free colored man of Massachusetts is worse off than the pampered slave of the rice swamps!
            <br></br>
                &emsp;In reading your life, no one can say that we have unfairly picked out some rare specimens of cruelty. We know that the bitter drops, which even you have drained from the cup, are no incidental aggravations, no individual ills, but such as must mingle always and necessarily in the lot of every slave. They are the essential ingredients, not the occasional results, of the system.
            <br></br>
                &emsp;After all, I shall read your book with trembling for you. Some years ago, when you were beginning to tell me your real name and birthplace, you may remember I stopped you, and preferred to remain ignorant of all. With the exception of a vague description, so I continued, till the other day, when you read me your memoirs. I hardly knew, at the time, whether to thank you or not for the sight of them, when I reflected that it was still dangerous, in Massachusetts, for honest men to tell their names! They say the fathers, in 1776, signed the Declaration of Independence with the halter about their necks. You, too, publish your declaration of freedom with danger compassing you around. In all the broad lands which the Constitution of the United States overshadows,
 there is no single spot,—however narrow or desolate,—where a fugitive slave can plant himself and say, “I am safe.” The whole armory of Northern Law has no shield for you. I am free to say that, in your place, I should throw the MS. into the fire.
            <br></br>
                &emsp;You, perhaps, may tell your story in safety, endeared as you are to so many warm hearts by rare gifts, and a still rarer devotion of them to the service of others. But it will be owing only to your labors, and the fearless efforts of those who, trampling the laws and Constitution of the country under their feet, are determined that they will “hide the outcast,” and that their hearths shall be, spite of the law, an asylum for the oppressed, if, some time or other, the humblest may stand in our streets, and bear witness in safety against the cruelties of which he has been the victim.
            <br></br>
                &emsp;Yet it is sad to think, that these very throbbing hearts which welcome your story, and form your best safeguard in telling it, are all beating contrary to the “statute in such case made and provided.” Go on, my dear friend, till you, and those who, like you, have been saved, so as by fire, from the dark prison-house, shall stereotype these free, illegal pulses into statutes; and New England, cutting loose from a blood-stained Union, shall glory in being the house of refuge for the oppressed,—till we no longer merely “hide the outcast,” or make a merit of standing idly by while he is hunted in our midst; but, consecrating anew the soil of the Pilgrims as an asylum for the oppressed, proclaim our welcome to the slave so loudly, that the tones shall reach every hut in the Carolinas, and make the broken-hearted bondman leap up at the thought of old Massachusetts.

            </p>






            <p
            style={{textAlign: 'right'}}
            >   God speed the day!<br></br>
                Till then, and ever,<br></br>
                Yours truly,<br></br>
                WENDELL PHILLIPS
            </p>


        </div>
    )
}

export default Letter
