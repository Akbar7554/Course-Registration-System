import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({handleSelectItems}) => {
    // console.log(handleSelectItems);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="grid gap-10 items-center md:grid-cols-2 lg:grid-cols-3">
            {/* <h1>main part {courses.length}</h1> */}
            {
                courses.map(course => 
                <Course 
                key={course.id}
                course={course}
                handleSelectItems={handleSelectItems}>
                </Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelectItems: PropTypes.func
}

export default Courses;