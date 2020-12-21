import React from 'react';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
  Container,
  BackgroundBall,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
} from './styles';

import { MainText } from '../Home/styles';
import CategorySlider from '../../components/CategorySlider';
import SoundCards from '../../components/SoundCards';
import Button from '../../components/Button';

const SoundSelection: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <BackgroundBall />
        <MainText>My Sounds</MainText>
        <SearchBarContainer>
          <SearchIcon name="search" size={24} />
          <SearchBar />
        </SearchBarContainer>
        <CategorySlider categories={['Nature', 'ASMR', 'Others']} />
        <SoundCards />
        <Button icon={'play-circle'} center margin={32} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SoundSelection;
