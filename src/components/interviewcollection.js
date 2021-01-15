import React,{useState} from 'react'
import '../componentscss/interview.css'

import TextField from '@material-ui/core/TextField';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(4),
      width: 400,
      top:'4px'
     
    },
    root:{
        position:'absolute',
    width:'250px',
    height:'40px',
    
    left:'-10%',
    right:'0%',
    top:'8px',
    bottom:'0px',
    background: 'white',
/* Gray/888888 (50L) */

    border: '1px solid #888888',
    boxSizing: 'border-box',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    margin:'510px 99px 258px 220px'
    }
  }));


export default function Interviewcollection() {

    const classes = useStyles();

    const [email,setemail]=useState("");
    const [location,setlocation]=useState("");
   
    return (
        <div className="interview">

        <div className="headeroftheform">
            <p className="detailstext">Interview Availability</p>
            <p className="detailstext1">Select The slots</p>
            <p className="detailstext2">provide the following information to process your application</p>
        </div>
        <div className="mainbody">
                <form className="form">
                    <div className="">
                    <label className="email">1.Email*</label><br/>
                    <input className="inputemail" type="text" placeholder="Enter a valid Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    </div>
                    <div className="locationdiv">
                    <label className="location">2.Location</label><br/>
                    <input className="inputlocation" placeholder="Enter a valid location" value={location} onChange={(e)=>{setlocation(e.target.value)}}/>
                    </div>
                    <div className="Interviewdatediv"> 
                    <label className="date">3.Interview Date</label><br />
                    <div className="inputdate">


                    <TextField
                        id="date"
                        label=""
                        type="date"
                        defaultValue=""
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                   
                    </div>
                    
                    </div>
                    <div className="timediv">
                    <label className="time">4.Interview Time</label><br/>
                    <div className="inputtime">
                    <TextField
                        id="time"
                        label=""
                        type="time"
                        defaultValue=""
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
                    </div>
                    
                    </div>
                    <div className="timezonediv">
                    <label className="timezone">5.Time Zone</label><br/>
                    <select type="select" className="inputtimezone"/>

                   
                    </div>
                    <div className="mediumdiv">
                    <label className="medium">6.Medium</label><br/>
                    <select className="inputmedium" />
                    
                    </div>
                </form>
        </div>
      
    </div>
    )
}
