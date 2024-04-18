import React from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import Content from './Components/Content';
import Profile from './Components/Profile';
import Assignment from './Components/Assingment'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Reports from './Components/Reports';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard--content">
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/assignment' element={<Assignment />} />
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/message'/>
          <Route path='/help'/>
        </Routes>
        {location.pathname === '/' && <Profile />}
      </div>
    </div>
  );
}

export default App;
