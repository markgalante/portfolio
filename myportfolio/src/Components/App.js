import React from 'react';
import './App.css';
import About from './About'; 
import Education from './Education';
import Work from './Work'; 
import Skills from './Skills'; 

const App = props => { 
  const profileData = props.jsonObj.basics; 
  const aboutData = profileData.aboutMe;  
  const workData = props.jsonObj.work; 
  const skillsData = props.jsonObj.skills; 
  const educationData = props.jsonObj.education; 

  return(
    <div>
      <About /> 
      <Work /> 
      <Skills /> 
      <Education /> 
    </div>
  )

}

export default App;
