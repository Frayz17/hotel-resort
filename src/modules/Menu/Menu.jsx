import React, { useState } from 'react';
import logo from 'assets/images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import Link from 'components/Link';
import { LinksBox, NavBar, NavContainer, NavButton } from './styled';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBar>
      <NavContainer>
        <NavHeader>
          <Link to="/">Home</Link>
          <Button type="button"></Button>
        </NavHeader>
        <LinksBox>
          <Link to="/rooms">Rooms</Link>
        </LinksBox>
      </NavContainer>
    </NavBar>
  );
};
