import React,{useState} from 'react'
import '../componentscss/document.css'
import Button from '@material-ui/core/Button';



import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(4),
      width: 800,
      background:'white',
      top:'2px',
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
      margin:'388px 50px 406px 220px'
     
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


export default function Documentcollection() {

    const classes = useStyles();

    const [email,setemail]=useState("");
    const [location,setlocation]=useState("");
   
    return (
        <div className="interview">

        <div className="headeroftheform">
            <p className="detailstext">Document</p>
            <p className="detailstext1">Please attached the valid documents</p>
            <p className="detailstext2">provide the following information to process your application</p>
        </div>
        <div className="mainbody">
                <form className="form">
                    <div className="t">
                    <label className="ten">1.10th Marksheet*</label><br/>
                    <input type="file" className="inputten" />
                      
                       
                    </div>
                    <div className="12">
                    <label className="twelve">2.12th Marksheet*</label><br/>
                    <input type="file" className="inputtwelve" placeholder="Attach file upto 5kb" />
                    </div>
                    <div className="gradmarksheet"> 
                    <label className="grad">3.Graduation MarkSheet</label><br />
                    <input type="file" className="inputgrad" placeholder="Attach file upto 5kb" />
                    
                    
                    </div>
                    <div className="post">
                    <label className="postgrad">4.PostGrad Marksheet</label><br/>
                    <input type="file" className="inputpostgrad" placeholder="Attach file upto 5kb" />
                   
                    
                    </div>
                    <div className="offer">
                    <label className="offerletter">5.Offer Letter</label><br/>
                    <input type="file" className="inputofferletter"/>
                   
                    </div>
                    <div className="Salary">
                    <label className="slips">6.SalarySlips*</label><br/>
                    <input type="file" className="inputslips" />
                    
                    </div>
                    
                </form>
        </div>
      
    </div>
    )
}
