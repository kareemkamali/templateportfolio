import React from 'react'
import ExperienceNavbar from './ExperienceNavbar'
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Routes
  } from 'react-router-dom';
import About from '../About/About';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
const Experience = () => {
  return (
 <section id='experience'>
  <div className='experience_section'>
<h3><span>02.</span>Experience</h3>
      <div className='experience_container'>
    <ExperienceNavbar/>
    
      </div>

    


  </div>




 </section>
  )
}

export default Experience