import React from 'react'; 
import WorkItem from './WorkItem'; 

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
            <h2><i></i>Work Experience</h2>
            {getWorkExperience()}
        </section>
    ); 
}; 
export default Work; 