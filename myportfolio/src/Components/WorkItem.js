import React from 'react'; 
import moment from 'moment'; 

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.started).format('MMM, YYYY'); 
        let enddate = null; 
        if(props.WorkItemData.ended !== ''){
            enddate = moment(props.workItem.ended).format('MMM, YYYY');
        }
        else{
            enddate = "Present"; 
        }
        return <span> {startdate} - {enddate} </span>
    }

    const getHighlights = props.WorkItemData.highlights.map(function(item, index){
        return (<li key={index}>{item}</li>)
    }); 
    return(
        <div>
            <h3>{props.WorkItem.position}, <span>{props.WorkItem.employer}</span></h3>
            <p>{getWorkDates()}</p>
            <p>{props.workItemData.myrole}</p>
            <ul>{getHighlights}</ul>
        </div>
    )
}
export default WorkItem; 