import React from 'react'
import { Link } from 'react-router-dom';
import DUMMY_Media from './MediaData';

const SocialMedia = () => {
  return (

    
    <div className='social-media-icons'>
    <ul className='icons-list'>
    {DUMMY_Media.map((media)=>(
     <li key={media.id}>
      
         <Link to={media.link}> <img src={media.icon} alt={media.id}/> </Link>
     </li> ))}   

    </ul>

</div>





  );
}

export default SocialMedia