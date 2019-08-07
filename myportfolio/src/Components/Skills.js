import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Skills = props =>{
    const getSkills = props.skillsData.keywords.map(function (item, index){
        return (<li key={index}><span className="label label-success">{item}</span></li>)
    });

    return(
        <section className="skills">
            <h2 className="text-uppercase"><FontAwesomeIcon icon={['fas', 'code']} /> Skills</h2>
            <ul className="skills-list list-inline">{getSkills}</ul>
        </section>
    ) 
};
export default Skills; 