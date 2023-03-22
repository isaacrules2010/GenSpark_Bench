import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElements';

const NavBar = () => {
  return (
    <>
    <Nav>
        <Bars />

        <NavMenu>
            <NavLink to='#' activeStyle>
                Home
            </NavLink>
            <NavLink to='/test' activeStyle>
                Test
            </NavLink>
            <NavLink to='#' activeStyle>
                Humans Vs Monsters
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to = '#'> Load Game </NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  )
}

export default NavBar