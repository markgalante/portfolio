import React from 'react';
import './App.css';

const App = props => { 
  const profileData = props.jsonObj.basics; 
  const aboutData = profileData.aboutMe;  
  const workData = props.jsonObj.work; 
  const skillsData = props.jsonObj.skills; 
  const educationData = props.jsonObj.education; 
}

export default App;
