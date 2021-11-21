import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ({ children }: { children: React.ReactChild }) => (
  <div className="Nav">{children}</div>
);

export const NavbarContainer = ({
  children,
}: {
  children: React.ReactChild[];
}) => <div className="NavbarContainer">{children}</div>;

export const NavLogo = ({
  children,
  to,
}: {
  children: React.ReactChild;
  to: string;
}) => (
  <Link className="NavLogo" to={to}>
    {children}
  </Link>
);

export const MobileIcon = ({
  children,
  onClick,
}: {
  children: React.ReactChild;
  onClick(): void;
}) => (
  <div className="MobileIcon" onClick={onClick}>
    {children}
  </div>
);

export const NavMenu = ({ children }: { children: React.ReactChild[] }) => (
  <ul className="NavMenu">{children}</ul>
);

export const NavItem = ({ children }: { children: React.ReactChild }) => (
  <li className="NavItem">{children}</li>
);

export const NavLinks = ({
  children,
  to,
}: {
  children: React.ReactChild;
  to: string;
}) => (
  <Link to={to} className="NavLinks">
    {children}
  </Link>
);
