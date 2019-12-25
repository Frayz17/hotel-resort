import styled from 'styled-components';
import Block from 'components/Block';

export default styled(Block)`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;
