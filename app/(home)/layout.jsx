import React from 'react'
import NavBar from '../_components/NavBar';
import Footer from '../_components/Footer';

const layout = ({ children }) => {
  return (
    <div>
        <NavBar/>
      { children }
{/*       <Footer/> */}
    </div>
  )
}

export default layout;
