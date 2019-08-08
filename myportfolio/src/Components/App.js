import React from 'react';
//import './App.css';
import About from './About'; 
import Education from './Education';
import Work from './Work'; 
import Skills from './Skills'; 
import Profile from './Profile'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
 
library.add(fas); 

const App = props => { 
  const profileData = props.jsonObj.basics; 
  const aboutData = profileData.aboutMe;  
  const workData = props.jsonObj.work; 
  const skillsData = props.jsonObj.skills; 
  const educationData = props.jsonObj.education; 

  return(
    <Container>
      <Row>
        
        <Col md={4} className="profileOnApp">
          <div className="inner">
            <Profile profileData={profileData}/>
          </div>
        </Col>
         
        <Col md={8} className="infoOnApp">
          <div className="inner">
            <About aboutData={aboutData}/> 
            <Work workData={workData}/> 
            <Skills skillsData={skillsData}/> 
            <Education educationData={educationData}/>
          </div>
        </Col>
      
      </Row> 
    </Container>
  )

};

/*App.propTypes = {
  jsonObj: PropTypes.object.isRequired
}*/

export default App;