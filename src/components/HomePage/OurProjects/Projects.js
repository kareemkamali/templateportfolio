import React from 'react'
import project1  from '../../../assets/Images/ProjectsImages/project1.png';
import AllProject from './AllProject';
const Projects = () => {
  return (
 <section id="my_project">
     <div className='project_section'>
         <h3><span>03.</span>My Projects</h3>
     </div>
     <div className='project_container'>
         <div className='project_image'>
             <img src={project1} alt='project name'></img>
         </div>
         <div className='project_details'>
             <h1>Latest project</h1>
             <div className='project_details_title'>
             <h3>Magma Solutions</h3>
             </div>
           
             <div className='project_detail_description'>
           <p>
               
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </p>
             </div>
             <div className='check_it'>
             <h1 className='check_it'>Check it Out !</h1>
              </div>
           
         </div>
     </div>



     <div className='project_container'>
         <div className='project_image'>
             <img src={project1} alt='project name'></img>
         </div>
         <div className='project_details'>
             <h1>Latest project</h1>
             <h3>Magma Solutions</h3>
             <div className='project_detail_description'>
           <p>
               
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </p>
             </div>
             <div className='check_it'>
             <h1 className='check_it'>Check it Out !</h1>
              </div>
           
         </div>
       
     </div>







     <AllProject></AllProject>











 </section>
  )
}

export default Projects;