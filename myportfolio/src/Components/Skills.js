import React from 'react'; 

const Skills = props =>{
    const getSkills = props.skillsData.keywords.map(function (item, index){
        return (<li key={index}><span>{item}</span></li>)
    });

    return(
        <section>
            <h2><i></i>Skills</h2>
            <ul>{getSkills}</ul>
        </section>
    )
};
export default Skills; 