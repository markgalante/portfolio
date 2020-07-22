import { createContext } from "react"; 

const ProjectsContext = createContext([
    {
        "projectName": "Kinetic",
        "projectURL": "https://github.com/markgalante/kinetic", 
    },
    {
        "projectName": "YelpCamp",
        "projectURL": "https://github.com/markgalante/yelp_camp", 
    },
    {
        "projectName": "Crwn Clothing",
        "projectURL": "https://github.com/markgalante/crwn-clothing", 
    }, 
]); 

export default ProjectsContext;