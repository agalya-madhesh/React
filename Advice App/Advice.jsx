import {useEffect, useState} from 'react'
import './Advice.css'

const Advice = () => {

    const [advice,setAdvice] =useState("Need Advice for how to be happy in life?");
    const [count, setCount]=useState(0);



    async function getAdvice(){
        const res=await fetch("https://api.adviceslip.com/advice");
        // console.log(res);
        const data= await res.json()
        // console.log(data);
        setAdvice(data.slip.advice);
        setCount ((c) => c + 1);
    }

    useEffect(function(){
        getAdvice();
    }, []);

    return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Click here</button>
        <Counter count={count}/>
    </div>
  )
}

function Counter(props){
    return(
    <p>You have read <b>{props.count}</b> pieces of advice</p>
    );
}

export default Advice