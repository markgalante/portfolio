import React from 'react'; 

const About = props =>{
    return(
        <section>
            <h2>About</h2>
            <div>
                {props.aboutData}
            </div>
        </section>
    )
}; 

export default About; 