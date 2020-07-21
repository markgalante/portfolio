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
        }
    }
); 

export default BasicInformationContext; 