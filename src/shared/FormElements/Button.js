import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
  <Link to={props.to}
   exact={props.exact}
   className='Button'>
      {props.children}
  </Link>
  )
}

export default Button