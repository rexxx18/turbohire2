import Vector from './vectors/Vector.png'
import React,{useState,useRef} from 'react';
import {Link,Switch,Route} from 'react-router-dom';


import './App.css';
import Detailscollection from './components/detailscollection';
import Documentcollection from './components/documentcollection';
import Interviewcollection from './components/interviewcollection';
import Statement from './components/statement';

function App() {
  
  return (
    <div className="App">
      <div className="Header">
        <div className="firstStep">
        <img className="square" src={Vector} alt="vaxtor"></img><p className="step1">Form Selection</p>
        </div>
        
        <p className="step2">Set up</p>
        
        <p className="step3">Form Creation</p>
        
        <p className="step4">Review</p>
      </div>
     
      <div className="middlepart">

        <div className="sidebar">
            <div className="outerrectangle">
              <div className="innerrectangle"></div>
              <div className="text">New Form</div>
              <div className="para">Start creating a new form with the wide options of fields available</div>
            </div>
            <div className="sidebartext">
              Explore the following Templates
            </div>
            <Link to="/">
            <div className="outerrectangle1">
              <div className="innerrectangle"></div>
              <div className="text">Details Collection</div>
              <div className="para">Collect information from Candidates on their education, work experience, contact no,etc</div>
            </div>
            </Link>
            <Link to="/documents">
            <div className="outerrectangle2">
              <div className="innerrectangle"></div>
              <div className="text">Document Collection</div>
              <div className="para">Save time and efforts: Explore this template to find a set of questions required for document collection </div>
            </div>
            </Link>
            <Link to="/statement">
            <div className="outerrectangle3">
              <div className="innerrectangle"></div>
              <div className="text">Statement Of Purpose</div>
              <div className="para">Start creating a new form with the wide options of fields available</div>
            </div>
            </Link>
            <Link to="/interview">
            <div className="outerrectangle4">
              <div className="innerrectangle"></div>
              <div className="text">Interview Availability</div>
              <div className="para">Start creating a new form with the wide options of fields available</div>
            </div>
            </Link>
        </div>




        <div className="maininputcomponent">
          <div className="preview">Preview</div>
          <div className="previewtext">You will be able to customize the fields in the later stage</div>
          <div>
          <Switch>
            <Route path="/" exact ><Detailscollection /></Route>
            <Route path='/interview' exact><Interviewcollection /></Route>
            <Route path='/documents' exact><Documentcollection /></Route>
            <Route path='/statement'  exact><Statement /></Route>
          </Switch>
          </div>

        </div>

      </div>

      <div className="footer">
          <button className="button">Next</button>
      </div>



      </div>
   
  );
}

export default App;
