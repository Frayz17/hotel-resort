import styled from 'styled-components';
import Block from 'components/Block';

export default styled(Block)`
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`;
