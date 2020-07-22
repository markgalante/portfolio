import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillsContext from '../Context/skills.context';
import StackThumbnail from './StackThumbnail';

const Skills = () => {
    const skills = useContext(SkillsContext);

    const stackThumbnails = skills.stack.map((skill, index) => {
        return (<StackThumbnail techImageURL={skill.techImageURL} techName={skill.techName} key={index} />)
    })

    return (
        <div className="skills-page">
            <h2><FontAwesomeIcon icon={['fas', 'code']} /> Languages and Frameworks</h2>
            <div className="divider"></div>
            <div className="stack-thumbnails">
                {stackThumbnails}
            </div>
        </div>

    )
};
export default Skills; 