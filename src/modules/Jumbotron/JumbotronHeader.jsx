import styled from 'styled-components';
import defaultBcg from 'assets/images/defaultBcg.jpeg';

const JumbotronHeader = styled.header`
  min-height: calc(100vh - 66px);
  background: url(${defaultBcg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ cssStr = '' }) => cssStr}
`;

export default JumbotronHeader;
