import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

type ThemeToggleProps = {
  inline?: boolean;
};

const ToggleWrapper = styled.div<{ inline?: boolean }>`
  position: ${({ inline }) => (inline ? 'relative' : 'fixed')};
  top: ${({ inline }) => (inline ? 'auto' : '20px')};
  right: ${({ inline }) => (inline ? 'auto' : '20px')};
  z-index: 1001;
  @media (max-width: 768px) {
    top: ${({ inline }) => (inline ? 'auto' : 'auto')};
    right: ${({ inline }) => (inline ? 'auto' : '12px')};
    bottom: ${({ inline }) => (inline ? 'auto' : '16px')};
  }
`;

const SwitchLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchTrack = styled.div<{ checked: boolean }>`
  width: 56px;
  height: 32px;
  border-radius: 16px;
  position: relative;
  display: inline-block;
  background: ${({ theme }) => (theme.name === 'dark' ? '#374151' : '#e5e7eb')};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  transition: background 0.2s ease, border-color 0.2s ease;
  @media (max-width: 768px) {
    width: 50px;
    height: 28px;
    border-radius: 14px;
  }
`;

const SwitchThumb = styled(motion.div)`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 0; /* avoid vertical shift from icon */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  @media (max-width: 768px) {
    width: 22px;
    height: 22px;
    top: 3px;
    left: 3px;
    font-size: 10px;
  }
`;

const ThemeToggle: React.FC<ThemeToggleProps> = ({ inline }) => {
  const { theme, toggleTheme } = useTheme();
  const checked = theme.name === 'dark';

  const onChange = () => {
    toggleTheme();
  };

  return (
    <ToggleWrapper inline={inline}>
      <SwitchLabel aria-label="Toggle color theme">
        <HiddenCheckbox role="switch" aria-checked={checked} checked={checked} onChange={onChange} />
        <SwitchTrack checked={checked}>
          <SwitchThumb
            layout
            animate={{ x: checked ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            {checked ? <FaMoon /> : <FaSun />}
          </SwitchThumb>
        </SwitchTrack>
      </SwitchLabel>
    </ToggleWrapper>
  );
};

export default ThemeToggle; 