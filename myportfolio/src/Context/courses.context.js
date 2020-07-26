import { createContext } from 'react'; 

const CoursesContext = createContext([
    {
        provider: "Udemy", 
        name: "The Web Developer Bootcamp",
        link: "https://www.udemy.com/course/the-web-developer-bootcamp/"
    }
]);

export default CoursesContext; 