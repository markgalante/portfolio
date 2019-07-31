import React from 'react'; 
import moment from 'moment'; 

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.started).format('MMM, YYYY'); 
        let enddate = null; 
        if(props.workItemData.ended !== ''){
            enddate = moment(props.workItemData.ended).format('MMM, YYYY');
        }
        else{
            enddate = "Present"; 
        }
        return <span> {startdate} - {enddate} </span>
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index){
        return (<li key={index}>{item}</li>)
    }); 
    return(
        <div className="workItem">
            <h3>{props.workItemData.position}, <span>{props.workItemData.employer}</span></h3>
            <p className="workDates">{getWorkDates()}</p>
            <p>{props.workItemData.myrole}</p>
            <ul>{getHighlights}</ul>
        </div>
    )
}
export default WorkItem; 