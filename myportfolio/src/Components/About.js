import React, { useContext } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import AboutContext from '../Context/about.context';

const About = () =>{
    const about = useContext(AboutContext); 
    return(
        <section>
            <h4><FontAwesomeIcon icon={['fas', 'user']} /> About</h4>
            <div className="about">
                {about}
            </div>
        </section>
    );
}; 

export default About; 