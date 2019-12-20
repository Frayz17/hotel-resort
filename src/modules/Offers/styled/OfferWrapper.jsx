import styled from 'styled-components';

const OfferWrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

export default OfferWrapper;
