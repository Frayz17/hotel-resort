import styled from 'styled-components';

export default styled.form`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;

  @media screen and (min-width: 776px) {
    width: 70vw;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;
