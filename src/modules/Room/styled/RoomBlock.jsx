import styled from 'styled-components';

const RoomBlock = styled.div`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`;

export default RoomBlock;
