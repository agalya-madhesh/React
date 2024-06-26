import React from 'react';
import ProjectItem from './ProjectItem';
import './Project.css';
import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1> My Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) =>{
          return <ProjectItem id={idx} name={project.name} image={project.image}/>
        })}

      </div>
    </div>
  )
}

export default Projects