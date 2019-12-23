import styled from 'styled-components';
import Block from 'components/Block';

const BlockCenter = styled(Block)`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;

  @media screen and (min-width: 776px) {
    width: 90vw;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export default BlockCenter;
