import styled from 'styled-components';

export default styled.div`
  height: ${({ height = 0 }) => height}px;
  overflow: hidden;
  transition: var(--mainTransition);

  @media screen and (min-width: 768px) {
    height: auto;
    display: flex;
    margin-left: 4rem;
  }
`;
