import React from 'react'; 
import MarkGalante from './markgalante.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import Image from 'react-bootstrap/Image'; 

const Profile = props =>{
    const profileObj = props.profileData; 
    return (
        <div>
            <div className="profileImg">
                <Image src={MarkGalante} roundedCircle />
            </div>
            <div className="text-center profileName">{profileObj.firstName} {profileObj.surname}</div>
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