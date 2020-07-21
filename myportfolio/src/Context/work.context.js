import { createContext } from "react";

const WorkContext = createContext(
    {
        "workHistory": [
            {
                "employer": "Physiopaedic T/A Marq Labuschagne",
                "started": "8 January 2018",
                "ended": "",
                "position": "Physiotherapist",
                "myrole": "I have been working here since January 2018. This practice is based at Life Vincent Pallotti Hospital in Pinelands. I was based in the Orthopaedic Ward, the Robin Trust Sub-Acute Care Centre and downstairs at the practice. I saw both in- and out-patients",
                "highlights": [],
                "job": 2
            },
            {
                "employer": "Western Cape Government",
                "started": "1 January 2017",
                "ended": "31 December 2017",
                "position": "Community Service Physiotherapist",
                "myrole": "This was my first job after graduating as a physiotherapist. It was part of my community serive year. I headed up and managed the delivery of physiotherapy services to the Matzikama Sub-District in the Western Cape, South Africa",
                "highlights": [],
                "job": 1
            }
        ]
    }
);

export default WorkContext; 