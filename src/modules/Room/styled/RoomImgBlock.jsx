import styled from 'styled-components';
import FadeCenterLink from './FadeCenterLink';
import PriceBlock from './PriceBlock';

const RoomImgBlock = styled.div`
  position: relative;

  & > img {
    width: 100%;
    display: block;
    transition: var(--mainTransition);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &:hover > img {
    opacity: 0.3;
  }

  &:hover ${PriceBlock} {
    opacity: 0;
  }

  &:hover ${FadeCenterLink} {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export default RoomImgBlock;
