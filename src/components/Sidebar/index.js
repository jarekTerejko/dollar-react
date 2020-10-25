import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarMenuItem,
  SidebarLink,
  SideBtnWrapper,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleMenu}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarLink
              to="about"
              onClick={toggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              about
            </SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink
              to="discover"
              onClick={toggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              discover
            </SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink
              to="serveices"
              onClick={toggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              services
            </SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink
              to="signup"
              onClick={toggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              sign in
            </SidebarLink>
          </SidebarMenuItem>
        </SidebarMenu>
        <SideBtnWrapper>
          <SidebarRoute to="/sign-up">sign up</SidebarRoute>
        </SideBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
