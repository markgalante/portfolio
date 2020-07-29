import React, { useContext } from 'react';
import MarkGalante from './markgalante.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import SocialMedia from './SocialMedia';

import BasicInformationContext from '../Context/basics.context';

const Profile = () => {
    const profile = useContext(BasicInformationContext);
    return (
        <div>
            
            <div className="profileImg">
                <Image src={MarkGalante} roundedCircle />
            </div>
            <div className="text-center profileName">{profile.firstName} {profile.middleName} {profile.surname}</div>
            <div className="divider"></div>
            <ul className="list-unstyled contact-links">
                <li><FontAwesomeIcon icon={['fas', 'location-arrow']} /> {profile.location.city}, {profile.location.country}</li>
                <li><FontAwesomeIcon icon={['fas', 'envelope']} /> <a href={`mailto:${profile.contact.email}`} className="anchor-tag-black">{profile.contact.email}</a></li>
                <li><FontAwesomeIcon icon={['fas', 'mobile']}/> <a href={"tel: 0835103049"} className="anchor-tag-black"> {profile.contact.telephone} </a>  </li>
            </ul>
            <div className="divider"></div>
            <div>
                <SocialMedia />
            </div>
            <div className="divider"></div>
        </div>
    )
};

export default Profile; 