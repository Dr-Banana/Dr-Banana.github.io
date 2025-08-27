import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';


const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.name === 'dark' ? 'rgba(10, 10, 10, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  gap: 16px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accentHover};
  }
`;

const NavMenu = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.cardBackground};
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: ${({ isActive }) => isActive ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/" onClick={closeMenu}>
          Xuanzhi Zhang
        </Logo>
        
        <NavMenu isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </NavMenu>
        
        <RightControls>
          <ThemeToggle inline />
          <MobileMenuButton onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </RightControls>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 