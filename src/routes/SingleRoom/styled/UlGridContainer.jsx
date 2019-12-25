import styled from 'styled-components';

export default styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;
