import styled from 'styled-components';
import { LinkPrimary } from 'components/Link';

const RoomLink = styled(LinkPrimary)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  transition: all 0.3s linear;
`;

export default RoomLink;
