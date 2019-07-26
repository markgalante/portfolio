import React from 'react'; 

const Profile = props =>{
    const profileObj = props.profileData; 
    return (
        <div>
            <div className="profileImg"><img className="img-circle center-block" alt="Profile Picture" img={}/></div>
            <div className="text-center">{profileObj.name}</div>
            <div className="divider"></div>
            <ul className="list-unstyled contact-links text-center">
                <li><i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.country}</li>
                <li><i className="fa fa-lg fa-envelope"></i><a href={`mailto:${profileObj.contact.email}`}>{profileObj.contact.email}</a></li>
            </ul>
            <div className="divider"></div>
            <p>I built this resume using <a href="https://facebook.github.io/react/">React</a>under the guidance from the code used by <a href="https://jonbloomer.com.au/">Jonathan Bloomer</a>.</p>
        </div>
    )
};