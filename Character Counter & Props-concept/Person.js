//Props passes data from parent-component to child-component

import React from 'react';
import './Person.css';

const Person = (props) =>{

    return(
        <div className='person-container'>
        <div className='person'>
            <h2>Props in React</h2>
            <h3>Name : {props.name} </h3> 
            <h3>Age : {props.age} </h3>
        </div>
        </div>
        // {props.name} give us the name of the person passed as a prop
        // {props.age} give us the age of the person passed as a prop
    );
}

export default Person;