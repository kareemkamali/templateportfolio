import React, { useEffect, useState } from 'react'
import MainHeader from '../../shared/NavBar/MainHeader'
import Avatar from '../../shared/UiElement/Avatar'
import SideBar from './SideBar';
import DefaultUser from '../../assets/Images/Admin/User.jpg'

const Header = () => {
    let hi;
    const [name,setName]=useState(localStorage.getItem('myName'));
    const btnHandler=()=>{
        let s=localStorage.setItem('myName','karim kamali');
        hi=localStorage.getItem('myName');
        console.log(hi);
        setName(hi);
     
    }
    useEffect(()=>{
 


    },)
  return (
      <>
  <SideBar></SideBar>
   <MainHeader className='header_admin'>

       <div className='header_content'>


       <div className='admin_logo'>
            <h1>{name}</h1>
       </div>
       <div className='admin_photo'>
      <Avatar
      
      image={DefaultUser}
      alt='your Name'
      width='50px'
      
      />
      <button onClick={btnHandler}>das</button>
       </div>
       </div>


   </MainHeader>

   </>
  )
}

export default Header