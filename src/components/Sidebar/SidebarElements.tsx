import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = ({
  children,
  isOpen,
  onClick,
}: {
  children: React.ReactChild[];
  isOpen: boolean;
  onClick(): void;
}) => (
  <div
    style={
      isOpen ? { opacity: '100%', top: '0' } : { opacity: '0', top: '-100%' }
    }
    onClick={onClick}
    className="SidebarContainer"
  >
    {children}
  </div>
);

export const Icon = ({
  children,
  onClick,
}: {
  children: React.ReactChild;
  onClick(): void;
}) => (
  <div className="Icon" onClick={onClick}>
    {children}
  </div>
);

export const CloseIcon = () => <FaTimes className="CloseIcon" />;

export const SidebarWrapper = ({
  children,
}: {
  children: React.ReactChild;
}) => <div className="SidebarWrapper">{children}</div>;

export const SidebarMenu = ({ children }: { children: React.ReactChild[] }) => (
  <ul className="SidebarMenu">{children}</ul>
);

export const SidebarLink = ({
  children,
  to,
}: {
  children: React.ReactChild;
  to: string;
}) => (
  <Link to={to} className="SidebarLink">
    {children}
  </Link>
);
