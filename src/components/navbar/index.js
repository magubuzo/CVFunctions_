import React from 'react'
import {Nav, NavBtnLink, NavMenue, Title, NavBtn, Bars, NavLink} from './navbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            
            <Title>
                <h1> PVAMU Computer Vision </h1>
            </Title>
            
            
            <Bars />
            <NavMenue>
                <NavLink to="/poses" activeStyle>  PVAMU </NavLink>

                <NavLink to="/cartoon" activeStyle> CARTOON </NavLink>

                <NavLink to='/Mask' activeStyle> MASK </NavLink>
                
                <NavLink to="/" activeStyle> ABOUT </NavLink>
            </NavMenue>
            
        </Nav>
    </>
  )
}

export default Navbar