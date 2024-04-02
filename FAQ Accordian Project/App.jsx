import { useState } from 'react'
import './App.css'


const FaqItem = ({question,answer}) =>{
  const [show,setShow] = useState(false);

  const toggleShow = () =>{
    setShow(!show);
  }

  return(
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="item-header" onClick={toggleShow}>
        {question}
      </div>
      <div className="item-body">
        <div className="item-content">
          {answer}
        </div>
      </div>
    </div>
    
  )

}

const FaqAccordian = ({data}) =>{

  return (
    <div className="faq-accordian">
      <h2>FAQ's</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer}/>
      ))}
    </div>
  );
};

const data = [
    { id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { id: 2, question: "How do I install React?", answer: "You can install React using npm or yarn. Run `npm install react` or `yarn add react` in your project directory." },
    { id: 3, question: "What are the key features of React?", answer: "Some key features of React include virtual DOM, component-based architecture, JSX syntax, and one-way data flow." },
    { id: 4, question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that allows you to write HTML elements and React components in the same file." }
];


function App() {
  

  return (
    <>
       <div className='app'>
        <FaqAccordian data={data}/>
       </div>
    </>
  )
}

export default App
