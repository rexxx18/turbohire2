import React,{useState} from 'react'
import '../componentscss/statement.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




export default function Statement() {

    
    

    const [email,setemail]=useState("");
    const [name,setname]=useState("");
    const [contactno,setcontactno]=useState("");
    return (
        <div className="details">

            <div className="headeroftheform">
                <p className="detailstext">Statement</p>
                <p className="detailstext1">Enter Your Answers</p>
                <p className="detailstext2">provide the following information to process your application</p>
            </div>
            <div className="mainbody">
                    <form className="form">
                        <div>
                       <label className="Question1">1.Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?</label><br/>
                       <input placeholder="Enter a description for your answer" className="Question1input"type="text"></input><br/>
                       <span className="caution1">300 word limit</span>
                       </div>

                       <div>
                       <label className="Question2">2. Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?</label><br/>
                       <input placeholder="Enter a description for your answer" className="Question2input"type="text"></input>
                       <span className="caution2">300 word limit</span>
                       </div>

                       <div>
                       <label className="Question3">3.What are the three things that are most important to you in a job?</label><br/>
                       <input placeholder="Enter a description for your answer"className="Question3input"type="text"></input>
                       <span className="caution3">300 word limit</span>
                       </div>
                    </form>
            </div>
          
        </div>
    )
}
