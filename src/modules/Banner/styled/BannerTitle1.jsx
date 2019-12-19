import styled from 'styled-components';
import { Title1 } from 'components/Title';

const BannerTitle1 = styled(Title1)`
  font-size: 2.5rem;

  @media screen and (min-width: 576px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 4rem;
  }
`;

export default BannerTitle1;
