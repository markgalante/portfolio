import React from 'react';
//import './App.css';
import About from './About'; 
import Education from './Education';
import Work from './Work'; 
import Skills from './Skills'; 
import Profile from './Profile'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
 
library.add(fas); 

const App = props => { 
  const profileData = props.jsonObj.basics; 
  const aboutData = profileData.aboutMe;  
  const workData = props.jsonObj.work; 
  const skillsData = props.jsonObj.skills; 
  const educationData = props.jsonObj.education; 

  return(
    <div className="container">
      <div className="row">
        
        <aside className="col-md-4">
          <div className="inner">
            <Profile profileData={profileData}/>
          </div>
        </aside>
         
        <main className="col-md-8">
          <div className="inner">
            <About aboutData={aboutData}/> 
            <Work workData={workData}/> 
            <Skills skillsData={skillsData}/> 
            <Education educationData={educationData}/>
          </div>
        </main>
      
      </div> 
    </div>
  )

};

/*App.propTypes = {
  jsonObj: PropTypes.object.isRequired
}*/

export default App;