import React, { useState } from 'react';
import { Sidebar, Navbar } from '..';

function Layout({ children }: { children: React.ReactChild }) {
  const [isSidebarOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      {children}
    </>
  );
}

export default Layout;
