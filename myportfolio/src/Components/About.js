import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const About = props =>{
    return(
        <section>
            <h2><FontAwesomeIcon icon={['fas', 'user']} /> About</h2>
            <div className="about">
                {props.aboutData}
            </div>
        </section>
    );
}; 

export default About; 