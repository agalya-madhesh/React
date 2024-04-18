import React from 'react';
import '../Styles/Assignment.css';
import AssignmentHeader from './AssignmentHeader';

function Assignment() {
  const courses = [
    {
      title: 'React JS Course',
      instructor: 'Harrish',
      duration: '2 hours',
      level: 'Intermediate',
      rating: '4.5',
    },
    {
      title: 'Python for Beginners',
      instructor: 'Michael',
      duration: '3.5 hours',
      level: 'Beginner',
      rating: '4.7',
    },
  ];

  return (
    <div className="assignment-container">
      <AssignmentHeader />
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="assignment-card" key={index}>
            <div className="course-details">
              <h2>{course.title}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Duration: {course.duration}</p>
              <p>Level: {course.level}</p>
              <p>Rating: {course.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignment;
