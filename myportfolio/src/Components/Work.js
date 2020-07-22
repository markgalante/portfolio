import React, { useContext } from 'react'; 
import WorkItem from './WorkItem'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import WorkContext from '../Context/work.context'; 

const Work = () => {
    const workData = useContext(WorkContext); 
    console.log(workData); 
    const getWorkExperience = () => {
        const workItems = [];
        workData.workHistory.forEach((val, index) =>{
            workItems.push(<WorkItem key={index} workData={val}/>)
        }) 
        return workItems; 
    }
    return(
        <div className="work-experience">
            <h2><FontAwesomeIcon icon={['fas', 'briefcase']}/> Work Experience</h2>
            <div className="divider"></div>
            {getWorkExperience()}
        </div>
    ); 
}; 
export default Work; 