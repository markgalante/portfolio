import { createContext } from "react";

const WorkContext = createContext(
    {
        "workHistory": [
            {
                "employer": "Physiopaedic T/A Marq Labuschagne",
                "started": "2018-01-08", //YYYY-MM-DD
                "ended": "", //YYYY-MM-DD
                "position": "Physiotherapist",
                "myrole": `  This practice is based at Life Vincent Pallotti Hospital, Pinelands. 
                            I was based in the orthopaedic ward, the Robin Trust 
                            Sub-Acute Care Centre and at the practice. 
                            I attended to both in- and out-patients`,
                "highlights": [],
                "job": 2
            },
            {
                "employer": "Western Cape Government",
                "started": "2017-01-01", //YYYY-MM-DD
                "ended": "2017-12-31", //YYYY-MM-DD
                "position": "Community Service Physiotherapist",
                "myrole": ` This was my first job after graduating as a physiotherapist. 
                            It was part of my community serive year. I headed up and managed the 
                            delivery of physiotherapy services to the Matzikama Sub-District 
                            in the Western Cape, South Africa`,
                "highlights": [],
                "job": 1
            }
        ]
    }
);

export default WorkContext; 