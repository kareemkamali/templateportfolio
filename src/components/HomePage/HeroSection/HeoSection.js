import React from 'react'
import Button from '../../../shared/FormElements/Button'

const HeoSection = () => {
  return (
    <div  id='/' className='Hero-section'>
<div className='hero_container'>


      <div className='hero_title'>
      <h1>Hello, my name is</h1>
            </div>
  <div className='hero_name'>
  <h2>Karim Kamali.</h2>
  </div>
      <div className='hero_job'>
      <h2 className='job-title'>I'm a full stack developer.</h2>
      </div>

      <div className='hero_job_desc'>
      <p>I’m a software engineer specializing in building 
          (and occasionally designing) exceptional digital experiences.
           Currently, I’m focused on building accessible,
            human-centered products at Upstatement.</p>
      </div>

      <div className='hero_btn'>
      <Button to='/'>Lets talk Together !</Button>
      </div>
      </div>
        
    </div>
  )
}

export default HeoSection