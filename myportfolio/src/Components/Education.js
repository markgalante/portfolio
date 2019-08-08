import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Education = props =>{
    const getEducation = props.educationData.map(function(item, index){
        return(
            <div key={index}>
                <h3>{item.institution}</h3>
                <h4>{item.qualification}</h4>
                <p>{item.gradYear}</p>
            </div>
        )
    });

    return(
        <section className="education">
            <h2><FontAwesomeIcon icon={['fas', 'graduation-cap']} /> Education</h2>
            {getEducation}
        </section>
    )   
}; 
export default Education; 