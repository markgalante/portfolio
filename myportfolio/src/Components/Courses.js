import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CoursesContext from '../Context/courses.context';

const Courses = () => {
    const courses = useContext(CoursesContext);
    const coursesList = courses.map((course, index) => (
        <p key={index}><a href={course.link}> {course.name}</a>, {course.provider}</p>
    ))

    return (
        <div className="courses-container">
            <h2><FontAwesomeIcon icon={['fas', 'book-reader']} /> Courses Completed</h2>
            <div className="divider"></div>
            {coursesList}
        </div>
    )
};

export default Courses; 