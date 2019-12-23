import styled from 'styled-components';
import Button from './Button';

export default styled(Button)`
  display: inline-block;
  text-decoration: none;
  letter-spacing: var(--mainSpacing);
  color: var(--mainBlack);
  background: var(--primaryColor);
  padding: 0.4rem 0.9rem;
  border: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: var(--primaryColor);
  }
`;
