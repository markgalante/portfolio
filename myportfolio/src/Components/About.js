import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const About = props =>{
    return(
        <section>
            <h2 className="text-uppercase"><FontAwesomeIcon icon={['fas', 'user']} /> About</h2>
            <div>
                {props.aboutData}
            </div>
        </section>
    );
}; 

export default About; 