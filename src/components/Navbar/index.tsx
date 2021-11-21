import React from 'react';
import { FaBars } from 'react-icons/fa';

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './NavbarElements';
import './styles.css';

function Navbar({ toggleSidebar: toggle }: { toggleSidebar(): void }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to={'/'}>Job Portal</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/shortlisted">Shortlisted </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/rejected"> Rejected </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
