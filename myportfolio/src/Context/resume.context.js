import { createContext } from "react";

const ResumeContext = createContext(
    {
        "basics": {
            "firstName": "Mark",
            "middleName": "Vincent Joseph",
            "surname": "Galante",
            "dateOfBirth": "10 August 1992",
            "contact": {
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
            "aboutMe": "After graduating and practising as a physiotherapist, I decided to learn how to code to ensure that I keep up with modern technology. As it turns out, it's really interesting and I like the challenges so I decided that it's worthwhile giving it a go. So here is my resume that I hope to fill up in the upcoming years",
            "GitHub": {
                "username": "markgalante",
                "url": "https://github.com/markgalante"
            }
        },
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
        ],
        "work": [
            {
                "employer": "Physiopaedic T/A Marq Labuschagne",
                "started": "8 January 2018",
                "ended": "",
                "position": "Physiotherapist",
                "myrole": "I have been working here since January 2018. This practice is based at Life Vincent Pallotti Hospital in Pinelands. I was based in the Orthopaedic Ward, the Robin Trust Sub-Acute Care Centre and downstairs at the practice. I saw both in- and out-patients",
                "highlights": []
            },
            {
                "employer": "Western Cape Government",
                "started": "1 January 2017",
                "ended": "31 December 2017",
                "position": "Community Service Physiotherapist",
                "myrole": "This was my first job after graduating as a physiotherapist. It was part of my community serive year. I headed up and managed the delivery of physiotherapy services to the Matzikama Sub-District in the Western Cape, South Africa",
                "highlights": []
            }
        ],
        "volunteering": [
            {
                "organisation": "Habonim Dror Southern Africa",
                "start": "2011",
                "end": "2014",
                "url": "http://www.habo.org.za/",
                "myrole": "During this period, I took part in informally educating the youth in my community. Other roles included organising and assisting at camps for the youth"
            },
            {
                "organisation": "Ikamva Youth",
                "start": "2011",
                "end": "2011",
                "url": "http://ikamvayouth.org/",
                "myrole": "During my matric year at High School, I often volunteered on Saturdays to tutor grade 8, 9, 10 and 11 students subjects like mathematics, biology and physics"
            },
            {
                "organisation": "Western Cape Blood Services",
                "start": "2009",
                "end": "",
                "url": "https://www.wcbs.org.za/",
                "myrole": "Since I was 16, I donate blood whenever I get a chance. To date, I have donated 11 units of blood"
            }
        ],
        "publications": [
            {
                "title": "The effectiveness of proprioceptive and neuromuscular training compared to bracing in reducing the recurrence rate of ankle sprains in athletes: A systematic review and meta-analysis.",
                "year": "2018",
                "journal": "Journal of Back and Orthopaedic Rehabilitation",
                "authors": "M. Burger, D. O'Connor, R. Fisher, D. Dreyer, D. Foot, S. Zalgaonkir, M.Galante",
                "url": "https://content.iospress.com/articles/journal-of-back-and-musculoskeletal-rehabilitation/bmr170804"
            }
        ],
        "skills": {
            "title": "front-end developer",
            "level": "junior",
            "keywords": [
                "HTML",
                "CSS",
                "JavaScript",
                "jQuery",
                "Bootstrap",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB"
            ]
        },
        "hobbies": [
            "Football",
            "Tennis",
            "Golf"
        ],
        "languages": [
            {
                "language": "English",
                "fluency": "Home language"
            },
            {
                "language": "Afrikaans",
                "fluency": "Second language. Able to speak and understand. Weak writing skills"
            }
        ]
    }
); 

export default ResumeContext; 