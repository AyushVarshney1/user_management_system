import React from 'react'
import Wrapper from '../assets/wrappers/NavbarWrapper'
import img from '../assets/images/navbar-logo.png'

const Navbar = () => {
  return (
    <Wrapper>
        <img src={img} alt="logo" />
    </Wrapper>
  )
}

export default Navbar