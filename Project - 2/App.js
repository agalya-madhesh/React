
import React from 'react'
import Sidebar from './Components/Sidebar'
import './index.css'
import './App.css'
import Content from './Components/Content'
import Profile from './Components/Profile'


function App() {
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboard--content">
        <Content/>
        <Profile/>

      </div>
    </div>
  )
}

export default App