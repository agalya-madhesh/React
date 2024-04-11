//useState is like a storage box inside your component where you can keep track of information that might change
//we can change it whenever we want 


import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    // Count is a current state value 
    // setCount is a function that updates the current state value 

    return (
        <div>
             <h1>React Counter App</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Click here
            </button>
        </div>
        //onclick is an eventhandler that increments the previous value count by 1 when clicked 
    );
}

export default Counter;