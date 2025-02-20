import { useState, useEffect } from "react";

import axios from "axios";

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios
            axios.get("http://localhost:5000/api/courses")
            .then((res) => setCourses(res.data))
            .catch((error) => {
                console.error(error);
            });
        }, []);

        return (
            <div>
                <h2>Available Courses</h2>
                <ul>
                    {courses.map((course) => (
                        <li key={course._id}>{course.title} - {course.description}</li>

                    ))}
                </ul>
            </div>
        )

    };

export default Courses;