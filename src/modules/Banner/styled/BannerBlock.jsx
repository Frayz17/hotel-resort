import styled from 'styled-components';
import Block from 'components/Block';

const BannerBlock = styled(Block)`
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  color: var(--mainWhite);
  padding: 2rem 1rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);

  @media screen and (min-width: 576px) {
    padding: 2rem 3rem;
  }
  @media screen and (min-width: 992px) {
    padding: 2rem 6rem;
  }
`;

export default BannerBlock;
