import { createContext } from "react";

const SkillsContext = createContext({
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
    }
}); 

export default SkillsContext; 