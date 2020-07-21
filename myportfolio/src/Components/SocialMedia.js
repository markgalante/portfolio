import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BasicInformationContext from '../Context/basics.context';

const SocialMedia = () => {
    const socialMedia = useContext(BasicInformationContext);
    const icons = socialMedia["social-media"].map((fontAwesomeIcon, index) => (
        <div key={index} className="social-media-icon">
            <a href={fontAwesomeIcon["link"]} title={fontAwesomeIcon["site"]} className="anchor-tag-black">
                <FontAwesomeIcon icon={[fontAwesomeIcon["font-awesome-class"], fontAwesomeIcon["font-awesome-icon"]]} size="2x" />
            </a>
        </div>
    ))

    return (
        <div className="social-media-icons">
            {icons}
        </div>
    );
};

export default SocialMedia; 