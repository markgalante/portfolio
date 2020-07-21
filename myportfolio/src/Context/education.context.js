import { createContext } from "react";

const EducationContext = createContext({
    "education": [
        {
            "institution": "University of Stellenbosch",
            "qualification": "BSc. Physiotherapy (Hons)",
            "gradYear": "2016"
        },
        {
            "institution": "Herzlia",
            "qualification": "National Senior Certificate",
            "gradYear": "2011"
        }
    ]
});

export default EducationContext; 