import styled from 'styled-components';
import { TypographyTitle1 } from 'components/Typography';

const ResponsiveTypographyTitle1 = styled(TypographyTitle1)`
  font-size: 2.5rem;

  @media screen and (min-width: 576px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 4rem;
  }
`;

export default ResponsiveTypographyTitle1;
