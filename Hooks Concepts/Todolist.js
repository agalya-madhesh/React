import React, { useState } from 'react';

function Todolist() {

    const [task, setTask] = useState([]); // stores an array of tasks
    // task & inputValue is a current state value that stores list of tasks
    // setTask & setInputValue is function that updates the state value 
    const [inputValue, setInputValue] = useState([]);
    // will store the current value and updates when user clicks in the input box

    function handleChange(e) {
        setInputValue(e.target.value); // handlechange is a function by passing arguments as e, 
        //it updates the inputvalue state whenever user enters in the input box
    }

    function handleSubmit(e) { //handlesubmit takes e as an argument which is also a form submission function 
        e.preventDefault(); //prevents the default behaviour which is reload page 
        setTask([...task, inputValue]);
        // (...todos) creates a copy of exisiting array
        // inputValue is the text of the new todo item entered by the user
        // finaly its inside setTask, so it will contain the exisiting array as well as new item entered by user 
        setInputValue('');
    }

    function handleDelete(index) { // handleDelete function takes index as an argument (index - position )
        const newTask = [...task]; // (...todos) creates a copy of exisiting array
        newTask.splice(index, 1); //Remove the tasks at the specified index
        setTask(newTask); // after removing this modifies the tasks 
    }



    return (
        <div>
            <h2>My TO-DO List</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text' value={inputValue} onChange={handleChange} />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {task.map((task, index) => (
                    // here task is the list of task in todolist
                    //.map is used to go through each task and executes each task of an array in listed way

                    // li key ={task.id} is to writedown each task
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todolist;
