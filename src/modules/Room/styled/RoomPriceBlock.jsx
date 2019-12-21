import styled from 'styled-components';

const RoomPriceBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: var(--mainWhite);
  padding: 0.3rem 0.6rem 0.5rem;
  border-bottom-right-radius: 1rem;
  font-size: 0.5rem;
  text-align: center;
  transition: var(--mainTransition);

  & > h6 {
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: var(--mainSpacing);
  }
`;

export default RoomPriceBlock;
