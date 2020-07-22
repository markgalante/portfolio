import { createContext } from "react";

const SkillsContext = createContext({
    "skills": {
        "title": "front-end developer",
        "level": "junior",
        "keywords": [
            "HTML", //<img src="https://img.icons8.com/color/48/000000/html-5.png"/>
            "CSS", //<img src="https://img.icons8.com/color/48/000000/css3.png"/>
            "JavaScript", //<img src="https://img.icons8.com/color/48/000000/javascript.png"/>
            "jQuery", //<img src="https://img.icons8.com/ios-filled/50/000000/jquery.png"/>
            "Bootstrap", //<img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
            "React", //<img src="https://img.icons8.com/color/48/000000/react-native.png"/>
            "Node.js", //<img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
            "Express.js", //<img src="https://cnblackxp.github.io/imgs/technologies-icons/express.png" />
            "MongoDB" //<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
        ],

    },
    "stack": [
        {
            "techImageURL": "https://img.icons8.com/color/48/000000/html-5.png",
            "techName": "HTML"
        },
        {
            "techImageURL": "https://img.icons8.com/color/48/000000/css3.png",
            "techName": "CSS"
        },
        {
            "techImageURL": "https://img.icons8.com/color/48/000000/javascript.png",
            "techName": "JavaScript"
        },
        {
            "techImageURL": "https://img.icons8.com/ios-filled/50/000000/jquery.png",
            "techName": "jQuery"
        },
        {
            "techImageURL": "https://img.icons8.com/color/48/000000/bootstrap.png",
            "techName": "Bootstrap"
        },
        {
            "techImageURL": "https://img.icons8.com/color/48/000000/react-native.png",
            "techName": "React"
        },
        {
            "techImageURL": "https://img.icons8.com/color/48/000000/nodejs.png",
            "techName": "NodeJS"
        },
        {
            "techImageURL": "https://cnblackxp.github.io/imgs/technologies-icons/express.png",
            "techName": "Express"
        },
        {
            "techImageURL": "https://img.icons8.com/color/48/000000/mongodb.png",
            "techName": "MongoDB"
        }
    ]
});

export default SkillsContext; 