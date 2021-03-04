import styled from 'styled-components';
import BcgHome from '../../assets/bcgHome.png'

export const Home = styled.section`
  height: 100vh;
  padding: 0 49px;
  background-image: url(${BcgHome});
`;

export const TitleHome = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #F1FFE7;
  margin-top: 90px;
`

export const TextHome = styled.p`
  width: 50%;
  color: #F1FFE7;
  line-height: 1.3;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 22px;
`