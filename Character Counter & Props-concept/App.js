import React, { useState } from 'react' //usestate hook is to set value to functional component 
import "./App.css";
import Person from './Components/Person';

function App() {
  const maxLength = 50; //its like a rule that only 50character can be typed in the input box
  const [inputValue, setInputValue] = useState("");
  // inputValue is current state value, 
  // setInputValue updates the values each time 
  //useState keeps track of the current state value that is inputValue 

  const handleInputChange = (event) => { //this is a function that updates the inputvalue 
    setInputValue(event.target.value);
  }


  return (
    <div className='counter'>
      <h2>Character Counter</h2>
      <input className='input-box'
      type="text"
      placeholder="Enter your text here..."
      value={inputValue} // this line displays whatever someone types in the input box
      maxLength={maxLength} // sets the text characters to maximum length that is 50
      //when someone types on the inputbox the handleInputChange updates the inputvalue 
      onChange={handleInputChange}/> 
      <p>{inputValue.length} / {maxLength} </p> 


      <Person name="Agalya" age={25}/> 
      <Person name="Madheswaran" age={55}/>
    </div>
    //Above we are using the Person components multiple times 
    //And passing different name and age to each person component 
    //the props (name and age) are used to display the name & age of each person
  )
}

export default App;