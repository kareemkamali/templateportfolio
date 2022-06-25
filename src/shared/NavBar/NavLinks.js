import React from 'react';
import {NavLink} from 'react-router-dom';

import Button from '../FormElements/Button';
import { HashLink as ScrollLink } from "react-router-hash-link";
const NavLinks = (props) => {
  return (
    <ul className={`nav-items ${props.className}`}>

        <li>
            <ScrollLink smooth  to='#/'>
            <span className='link-nb'>01</span>
                            .Home
            </ScrollLink>
        </li>
        <li>
            <ScrollLink smooth to='#experience'>
            <span className='link-nb'>02</span>
                            .Experience
            </ScrollLink>
        </li>

        <li>
            <ScrollLink smooth  to='#my_project'>
            <span className='link-nb'>03</span>
                            .Portofolio
            </ScrollLink>
        </li>
        <li>
            <ScrollLink  smooth to='#contact'>
            <span className='link-nb'>04</span>
                            .Contact
            </ScrollLink>
        </li>


          <Button to='/'>
        MY CV
         </Button>

    </ul>
  )
}

export default NavLinks;