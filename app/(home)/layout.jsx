import React from 'react'
import NavBar from '../_components/NavBar';

const layout = ({ children }) => {
  return (
    <div>
        <NavBar/>
      { children }
    </div>
  )
}

export default layout;
