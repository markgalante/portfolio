import { createContext } from "react";

const BasicInformationContext = createContext(
    {
        "firstName": "Mark", 
        "middleName": "Vincent Joseph", 
        "surname": "Galante", 
        "dateOfBirth": "10 August 1992", 
        "contact":{
            "telephone": "083 510 3049", 
            "email": "mark.galante.14@gmail.com"
        },
        "location": {
            "apartmentBlock": "Santenay",
            "road": "Amber Road",
            "suburb": "Burgundy Estate",
            "postalCode": 7441,
            "city": "Cape Town",
            "province": "Western Cape",
            "country": "South Africa"
        },
        "social-media": [
            {
                "font-awesome-icon": "linkedin",
                "font-awesome-class": "fab", 
                "link": "https://www.linkedin.com/in/mark-galante-65137946/", 
                "site": "LinkedIn"
            },
            {
                "font-awesome-icon": "facebook",
                "font-awesome-class": "fab", 
                "link": "https://www.facebook.com/mark.v.j.galante/",
                "site": "Facebook"
            },
            {
                "font-awesome-icon": "github",
                "font-awesome-class": "fab", 
                "link": "https://github.com/markgalante",
                "site": "GitHub"
            }
        ]
    }
); 

export default BasicInformationContext; 