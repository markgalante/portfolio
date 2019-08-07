import React from 'react'; 
import WorkItem from './WorkItem'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Work = props => {
    const getWorkExperience = () => {
        const workItems = [];
        props.workData.forEach((val, index) =>{
            workItems.push(<WorkItem key={index} workItemData={val}/>)
        }) 
        return workItems; 
    }
    return(
        <section>
            <h2><FontAwesomeIcon icon={['fas', 'briefcase']} /> Work Experience</h2>
            {getWorkExperience()}
        </section>
    ); 
}; 
export default Work; 