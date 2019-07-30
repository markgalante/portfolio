import React, {PropTypes} from 'react';
//import './App.css';
import About from './About'; 
import Education from './Education';
import Work from './Work'; 
import Skills from './Skills'; 
import Profile from './Profile'; 

const App = props => { 
  const profileData = props.jsonObj.basics; 
  const aboutData = profileData.aboutMe;  
  const workData = props.jsonObj.work; 
  const skillsData = props.jsonObj.skills; 
  const educationData = props.jsonObj.education; 

  return(
    <div>
      <Profile profileData={profileData}/> 
      <About aboutData={aboutData}/> 
      <Work workData={workData}/> 
      <Skills skillsData={skillsData}/> 
      <Education educationData={educationData}/> 
    </div>
  )

}

App.propTypes = {
  jsonObj: PropTypes.object.isRequired
}

export default App;