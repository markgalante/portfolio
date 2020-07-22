import React, { useContext } from 'react'; 
import AboutContext from '../Context/about.context';

const About = () =>{
    const about = useContext(AboutContext); 
    return(
        <section>
            <div className="about">
                {about}
            </div>
        </section>
    );
}; 

export default About; 