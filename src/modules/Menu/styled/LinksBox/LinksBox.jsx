import styled from 'styled-components';

export default styled.div`
  height: auto;
  display: flex;
  margin-left: 4rem;

  @media screen and (min-width: 768px) {
    & {
      height: auto;
      display: flex;
      margin-left: 4rem;
    }
    & a {
      margin: 0 1rem;
      padding: 0.5rem 0;
    }
  }
`;
