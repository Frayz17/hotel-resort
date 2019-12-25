import React, { useState } from 'react';
import logo from 'assets/images/logo.svg';
import {
  NavigationBar,
  LinksBox,
  NavLink,
  NavContainer,
  NavButton,
  NavHeader,
  NavIcon
} from './styled';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationBar>
      <NavContainer>
        <NavHeader>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <NavButton type='button' onClick={handleToggle}>
            <NavIcon />
          </NavButton>
        </NavHeader>

        <LinksBox height={isOpen ? 100 : 0}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/rooms'>Rooms</NavLink>
        </LinksBox>
      </NavContainer>
    </NavigationBar>
  );
};
