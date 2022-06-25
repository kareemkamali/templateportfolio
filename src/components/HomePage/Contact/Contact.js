import React from 'react'
import Button from '../../../shared/FormElements/Button'

const Contact = () => {
  return (
  <section id='contact'>
      <div className='contact_me'>
      <h3><span>04.</span>Let`s Talk Together!</h3>
    <p>my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
    
    <div className='contact_button'>

    <Button to='/' >Say Hello</Button>
    </div>
    <div className='footer_Copyright'>
    © All Rights Reserved. Magma Solutions 2022
    </div>
      </div>
  </section>
  );
}

export default Contact;