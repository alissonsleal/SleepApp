import styled from 'styled-components/native';
import { Image } from 'react-native';

import sleepImage from '../../../assets/images/sleep.png';

export const Container = styled.View`
  /* padding: 84px 36px 70px 36px; */
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
`;

export const Background = styled(Image).attrs({ source: sleepImage })`
  flex: 1.75;
`;

export const UpperContainer = styled.View`
  flex: 0.3;
  padding: 84px 36px 0px 36px;
`;

export const MainText = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 24px;
  line-height: 36px;
  color: #333333;
  text-align: left;
`;

export const SecondaryText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  line-height: 27px;
  color: #4f4f4f;
  max-width: 85%;
`;

export const LowerContainer = styled.View`
  flex: 0.5;
  width: 100%;
  justify-content: space-between;
  padding: 0px 36px 70px 36px;
  margin-top: 16px;
`;
