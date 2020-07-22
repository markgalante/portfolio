import React from 'react';
import '../App.css';
import About from './About';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);
library.add(fab);

const App = () => {

  return (
    <Container>
      <Row>

        <Col lg={4} className="profileOnApp positioned-fixed">
          <div className="inner">
            <Profile />
            <About />
          </div>
        </Col>

        <Col lg={8} className="infoOnApp">
          <div className="inner">
            <Projects /> 
            <Skills />
            <Work />
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