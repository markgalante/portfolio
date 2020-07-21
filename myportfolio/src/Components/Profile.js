import React, { useContext } from 'react'; 
import MarkGalante from './markgalante.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import Image from 'react-bootstrap/Image'; 

import BasicInformationContext from '../Context/basics.context';

const Profile = () =>{
    const profile = useContext(BasicInformationContext); 
    return (
        <div>
            <div className="profileImg">
                <Image src={MarkGalante} roundedCircle />
            </div>
    <div className="text-center profileName">{profile.firstName} {profile.middleName} {profile.surname}</div>
            <div className="divider"></div>
            <ul className="list-unstyled contact-links text-center">
                <li><FontAwesomeIcon icon={['fas', 'location-arrow']}/> {profile.location.city}, {profile.location.country}</li>
                <li><FontAwesomeIcon icon={['fas', 'envelope']} /> <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></li>
            </ul>
            <div className="divider"></div>
            <p>I built this resume using <a href="https://facebook.github.io/react/">React</a> under the guidance from the code used by <a href="https://jonbloomer.com.au/">Jonathan Bloomer</a>.</p>

        </div>
    )
};

export default Profile; 