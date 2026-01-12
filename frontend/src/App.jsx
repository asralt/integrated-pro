import React from 'react'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Social from './components/Social'

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
      <div className="flex  items-center w-full mt-0.5 justify-start pl-[45%]">
        <Social />
      </div>

    </div>
  )
}

export default App
