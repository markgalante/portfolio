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

const App = () => {  

  return(
    <Container>
      <Row>
        
        <Col md={4} className="profileOnApp">
          <div className="inner">
            <Profile />
          </div>
        </Col>
         
        <Col md={8} className="infoOnApp">
          <div className="inner">
            <About /> 
            <Work /> 
            <Skills /> 
            <Education />
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