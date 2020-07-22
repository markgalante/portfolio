import React from 'react';
import moment from 'moment';

const WorkItem = ({ workData }) => {
    const getWorkDates = () => {
        const startdate = moment(workData.started).format('MMM YYYY');
        let enddate = null;
        if (workData.ended !== '') {
            enddate = moment(workData.ended).format('MMM YYYY');
        }
        else {
            enddate = "Present";
        }
        return <span> {startdate} - {enddate} </span>
    }

    const getHighlights = workData.highlights.map(function (item, index) {
        return (<li key={index}>{item}</li>)
    });
    return (
        <div className="workItem">
            <h4>{workData.position}, <span>{workData.employer}</span></h4>
            <p className="workDates">{getWorkDates()}</p>
            <p>{workData.myrole}</p>
            <ul>{getHighlights}</ul>
        </div>
    )
}
export default WorkItem; 