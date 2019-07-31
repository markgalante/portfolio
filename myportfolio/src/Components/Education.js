import React from 'react'; 

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
            <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i>Education</h2>
            {getEducation}
        </section>
    )   
}; 
export default Education; 