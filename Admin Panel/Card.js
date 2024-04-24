import React, {useState} from 'react'
import './Card.css'
import {layoutId} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Card(props) {

  const [expanded, setExpanded] = useState(false)
  return (
    <layoutId >
      {
        expanded?(
         'Expanded'
        ):
        <CompactCard param = {props} />
      }
    </layoutId >
  )
}

function CompactCard ({param}){
  const Png = param.png;
  return(
    <div className="CompactCard">
        <div className="radialBar">
          <CircularProgressbar 
          value={param.barValue}
          text={param.barValue}/>
        </div>
        <div className="detail">
          <Png/>
          <span>${param.value}</span>
          <span>Last 24 hours</span>
        </div>
    </div>
  )
}

export default Card