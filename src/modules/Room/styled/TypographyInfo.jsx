import styled from 'styled-components';
import Typography from 'components/Typography';

const TypographyInfo = styled(Typography)`
  background: var(--darkGrey);
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: var(--mainSpacing);
`;

export default TypographyInfo;
