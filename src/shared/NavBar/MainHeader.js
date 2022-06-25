import React from 'react'

const MainHeader = props => {
  
  return  <header className={`main-header ${props.className}`}>{props.children}</header>;
  
}

export default MainHeader