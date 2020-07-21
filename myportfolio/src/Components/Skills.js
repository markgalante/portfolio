import React, { useContext } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import SkillsContext from '../Context/skills.context';

const Skills = () =>{
    const skills = useContext(SkillsContext); 
    const getSkills = skills.skills.keywords.map(function (item, index){
        return (<li key={index}><span className="label label-success">{item}</span></li>)
    });

    return(
        <section className="skills">
            <h2><FontAwesomeIcon icon={['fas', 'code']} /> Skills</h2>
            <ul className="skills-list list-inline">{getSkills}</ul>
        </section>
    ) 
};
export default Skills; 