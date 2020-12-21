import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import BackgroundBallImg from '../../../assets/images/BackgroundBall.png';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 84px 36px 0px 36px;
`;

export const BackgroundBall = styled.Image.attrs({ source: BackgroundBallImg })`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const SearchBarContainer = styled.View`
  margin-top: 30px;
  width: 307px;
  height: 51px;

  background: rgba(147, 238, 249, 0.2);
  border-radius: 23px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled(Icon)`
  padding-left: 22px;
  color: #a0a0a0;
  margin-right: 22px;
`;

export const SearchBar = styled(TextInput).attrs({
  maxLength: 20,
  placeholder: 'Search',
  placeholderTextColor: '#a0a0a0',
})`
  flex: 1;
  padding-bottom: 0px;
  font-family: 'Poppins-Regular';
  color: #4f4f4f;
  font-size: 18px;
  line-height: 27px;
  /* text-align: center; */
`;
