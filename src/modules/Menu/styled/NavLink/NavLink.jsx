import styled from 'styled-components';
import Link from 'components/Link';

export default styled(Link)`
  display: block;
  text-decoration: none;
  padding: 1rem 0;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: var(--mainSpacing);

  &:hover {
    color: var(--primaryColor);
  }

  @media screen and (min-width: 768px) {
    margin: 0 1rem;
    padding: 0.5rem 0;
  }
`;
