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
            <NavLink to='/' activeStyle>
                Home
            </NavLink>
            <NavLink to='/HvM' activeStyle>
                Humans Vs Monsters
            </NavLink>
            <NavLink to='/scores' activeStyle>
                Scores
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