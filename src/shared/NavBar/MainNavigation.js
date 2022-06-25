import React from 'react'
import MainHeader from './MainHeader'
import ShapeLogo from '../../assets/Icons/ShapeLogo.svg';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
  <MainHeader>
      <div className='main-navigation'>
        
        <Link to='/'>      
          <div className='logo'>
               K
       
            
          </div>  </Link>
          <div className='nav-container'>
              
            <NavLinks className='flex-navlinks'></NavLinks>
          
          </div>
      </div>
  </MainHeader>
  )
}

export default MainNavigation