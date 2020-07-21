import React, { useContext } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import AboutContext from '../Context/about.context';

const About = () =>{
    const about = useContext(AboutContext); 
    return(
        <section>
            <h2><FontAwesomeIcon icon={['fas', 'user']} /> About</h2>
            <div className="about">
                {about.aboutMe}
            </div>
        </section>
    );
}; 

export default About; 