import React from 'react'
import '../Styles/Teacherlist.css'
import Image1 from '../Assets/Image1.jpg';
import Image2 from '../Assets/Image2.jpg';
import Image3 from '../Assets/Image3.jpg';
import Image4 from '../Assets/Image4.jpg';
import Image5 from '../Assets/Image5.jpg';


const teachers = [
    {
        image : Image1,
        name : 'Prof. Harrish',
        duration : '20 hours lesson',
        cost : '100',
    },
    {
        image : Image2,
        name : 'Prof. Michael',
        duration : '20 hours lesson',
        cost : '100',
    },
    {
        image : Image3,
        name : 'Prof. James',
        duration : '20 hours lesson',
        cost : '100',
    },
    {
        image : Image4,
        name : 'Prof. Mathew',
        duration : '20 hours lesson',
        cost : '100',
    },
    {
        image : Image5,
        name : 'Prof. Daniel',
        duration : '20 hours lesson',
        cost : '100',
    },
];

function TeacherList() {
  return (
    <div className='teacher-list'>
        <div className="list-header">
            <h2> Teachers </h2>
            <select>
                <option value="english">English</option>
                <option value="tamil">Tamil</option>
            </select>
        </div>

        <div className='list-container'>
            {teachers.map(teacher => 
            <div className='list'>
                <div className="teacher-details">
                <img src={teacher.image} alt={teacher.name}/>
                <h2>{teacher.name}</h2>
                </div>
                <span>{teacher.duration}</span>
                <span>${teacher.cost}/hr.</span>
                <span className='teacher-todo'>:</span>
            </div>
        )}
        </div>
    </div>
  )
}

export default TeacherList