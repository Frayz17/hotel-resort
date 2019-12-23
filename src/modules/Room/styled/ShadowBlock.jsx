import styled from 'styled-components';

const ShadowBlock = styled.div`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`;

export default ShadowBlock;
