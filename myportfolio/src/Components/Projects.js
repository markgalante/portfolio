import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectsContext from '../Context/projects.context';

const Projects = () => {
    const projects = useContext(ProjectsContext);
    const projectList = projects.map((project, index) => (
        <li key={index}>
            <a className="anchor-tag-black" href={project.projectURL}>{project.projectName}</a>
        </li>
    ))
    return (
        <div>
            <h2><FontAwesomeIcon icon={["fas", "project-diagram"]} /> Projects</h2>
            <ul className="project-list">
                {projectList}
            </ul>
        </div>
    );
};

export default Projects; 