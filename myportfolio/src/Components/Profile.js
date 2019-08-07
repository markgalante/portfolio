import React from 'react'; 
import MarkGalante from './markgalante.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Profile = props =>{
    const profileObj = props.profileData; 
    return (
        <div>
            <div className="profileImg"><img className="img-circle center-block" alt="Mark Galante" src={MarkGalante}/></div>
            <div className="text-center">{profileObj.name}</div>
            <div className="divider"></div>
            <ul className="list-unstyled contact-links text-center">
                <li><FontAwesomeIcon icon={['fas', 'location-arrow']}/> {profileObj.location.city}, {profileObj.location.country}</li>
                <li><FontAwesomeIcon icon={['fas', 'envelope']} /> <a href={`mailto:${profileObj.contact.email}`}>{profileObj.contact.email}</a></li>
            </ul>
            <div className="divider"></div>
            <p>I built this resume using <a href="https://facebook.github.io/react/">React</a> under the guidance from the code used by <a href="https://jonbloomer.com.au/">Jonathan Bloomer</a>.</p>

        </div>
    )
};

export default Profile; 