import React from 'react';
import MyImage from '../../../assets/Images/HomePage/MyImage.jpg';

const About = () => {
  return (
<section id='about'>
    <div className='about_section'>
      
    <h3><span>01.</span>About Me</h3>
        <div className='about_container'>
       <div className='about_desc'>
           <p> Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
</p>
             <p>  Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
              </p>
              <p>
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>
            
             
       </div>
       <div className='about_image'>
     <div className='wrapper'> 
          <img src={MyImage} alt='kareem'/>

          </div>
     </div>
        </div>
    </div>
</section>
  )
}

export default About