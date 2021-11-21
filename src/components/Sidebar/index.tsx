import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from './SidebarElements';
import './styles.css';

function Sidebar({
  isSidebarOpen: isOpen,
  toggleSidebar: toggle,
}: {
  isSidebarOpen: boolean;
  toggleSidebar(): void;
}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="shortlist">Shortlisted</SidebarLink>
          <SidebarLink to="reject">Rejected</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
