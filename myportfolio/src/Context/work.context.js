import { createContext } from "react";

const WorkContext = createContext(
    {
        "workHistory": [
            {
                "employer": "Lyle Diedericks Physiotherapists Inc.",
                "started": "2020-10-01", //YYYY-MM-DD
                "ended": "", //YYYY-MM-DD
                "position": "Physiotherapist",
                "myrole":   `Based at Life Vincent Pallotti Hospital, Pinelands. I am part of the 
                            team that delivers physiotherapy services to both in- and out-patients.
                            This practice was previously part of Physiopaedic.`,
                "highlights": [],
                "job": 3
            },
            {
                "employer": "Physiopaedic T/A Marq Labuschagne",
                "started": "2018-01-08", //YYYY-MM-DD
                "ended": "", //YYYY-MM-DD
                "position": "Physiotherapist",
                "myrole": `  Taken over by Lyle Diedericks. 
                            I was based in the orthopaedic ward, Robin Trust 
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