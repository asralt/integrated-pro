import React from 'react'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <div className=''> 
            <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
     </Router>      
    </div>
  )
}

export default App
