import React,{useState} from 'react'
import '../componentscss/details.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      
     
      

    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      margintop:theme.spacing(2),
      top:'4px',
      width: 300,
     
      
    },
  }));

export default function Detailscollection() {

    
      const classes = useStyles();

    const [email,setemail]=useState("");
    const [name,setname]=useState("");
    const [contactno,setcontactno]=useState("");
    return (
        <div className="details">

            <div className="headeroftheform">
                <p className="detailstext">Details</p>
                <p className="detailstext1">Enter Your Details</p>
                <p className="detailstext2">provide the following information to process your application</p>
            </div>
            <div className="mainbody">
                    <form className="form">
                        <div className="namediv">
                        <label className="name">1.Name*</label><br/>
                        <input className="inputname" type="text" placeholder="Enter a valid Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        </div>
                        <div className="emaildiv">
                        <label className="emailtime">2.Email*</label><br/>
                        <input className="inputemailtime" placeholder="ewnter a valid email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        </div>
                        <div className="datediv"> 
                        <label className="date">3.Date*</label>
                        <div className="inputdate">
                        <TextField
                            id="date"
                            
                            type="date"
                            defaultValue="MM/YYYY/DD"
                            className={classes.textField}
                            
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>
                        
                        </div>
                        <div className="contactdiv">
                        <label className="contact">4.contact no.*</label><br/>
                        <input className="inputcontact" type="text" placeholder="enter a valid contact no." value={contactno} onChange={(e)=>{setcontactno(e.target.value)}}/>

                        </div>
                    </form>
            </div>
          
        </div>
    )
}
