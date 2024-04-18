import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../Styles/Profile.css'
import userImage from '../Assets/Image1.jpg'
import { BiBook } from 'react-icons/bi'

const courses = [
  {
    title :'React JS',
    duration : '2 hours',
    icon:<BiBook/>,
  },
  {
    title :'Bootstrap',
    duration : '2.5 hours',
    icon:<BiBook/>,
  },
  {
    title :'Redux-Saga',
    duration : '1.5 hours',
    icon:<BiBook/>,
  }
]

function Profile() {
  return (
    <div className='profile'>
      <ProfileHeader />

      <div className='user-profile'>
        <div className='user-detail'>
          <img src={userImage} alt='' />
          <h3 className='username'>Prof. Harrish</h3>
          <span className='profession'>Teacher</span>
        </div>

        <div className='user-courses'>
          {courses.map((course) => (
            <div className='course' >
              <div className='course-detail'>
                <div className='course-cover'>
                    {course.icon}
                </div>
                <div className='course-name'>
                <h5 className='title' >{course.title}</h5>
                <span className='duration'>{course.duration}</span>
              </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Profile