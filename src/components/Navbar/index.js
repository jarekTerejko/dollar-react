import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggleMenu}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' >
                        dollar
                    </NavLogo>
                    <MobileIcon onClick={toggleMenu} >
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>
                                about
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>
                                discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>
                                services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>
                                sign up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/sign-in'>
                            sign in
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
