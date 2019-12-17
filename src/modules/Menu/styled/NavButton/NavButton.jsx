import styled from 'styled-components';
import Button from 'components/Button';

export default styled(Button)`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
