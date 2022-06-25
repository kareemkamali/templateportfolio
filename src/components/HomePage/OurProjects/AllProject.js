import React from 'react'
import Card from '../../../shared/UiElement/Card'
import shareIcon from '../../../assets/Icons/ShareIcon.svg';
import FileIcon from '../../../assets/Icons/FileIcon.svg'
const AllProject = () => {
  return (
   <div className='all_project'>
       <h3>My Projects</h3>
       <h1>View all</h1>
       <div className='all_project_container'>
           <Card className='card_product'>
               <div className='card_icons'>
<img src={shareIcon} alt='icon'></img>
<img src={FileIcon} alt='icon'></img>
               </div>
                <h3>Magma Solution</h3>
                <p>A minimal,r VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio asd Manager, and npm.</p>
           </Card>
           <Card className='card_product'>
               <div className='card_icons'>
               <img src={shareIcon} alt='icon'></img>
<img src={FileIcon} alt='icon'></img>
               </div>
                <h3>Magma Solution</h3>
                <p>A minimal, dark blue
                    asdasd
                    asd
                    asd
                     theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio asd Manager, and npm.</p>
           
           </Card>
           <Card className='card_product'>
               <div className='card_icons'>
               <img src={shareIcon} alt='icon'></img>
<img src={FileIcon} alt='icon'></img>
               </div>
                <h3>Magma Solution</h3>
                <p>A minimal, dark blue
                    asdasd
                    asd
                    asd
                     theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio asd Manager, and npm.</p>
           
           </Card>
           <Card className='card_product'>
               <div className='card_icons'>
               <img src={shareIcon} alt='icon'></img>
<img src={FileIcon} alt='icon'></img>
               </div>
                <h3>Magma Solution</h3>
                <p>A minimal, dark blue
                    asdasd
                    asd
                    asd
                     theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio asd Manager, and npm.</p>
           
           </Card>
           <Card className='card_product'>
               <div className='card_icons'>
               <img src={shareIcon} alt='icon'></img>
<img src={FileIcon} alt='icon'></img>
               </div>
                <h3>Magma Solution</h3>
                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio asd Manager, and npm.</p>
           </Card>
           <Card className='card_product'>
               <div className='card_icons'><img src={shareIcon} alt='icon'></img>
<img src={FileIcon} alt='icon'></img></div>
                <h3>Magma Solution</h3>
                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio asd Manager, and npm.</p>
           </Card>
       </div>
       </div>
  )
}

export default AllProject