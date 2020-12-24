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

import { useSound } from '../../context/ActiveSounds';

const SoundSelection: React.FC = () => {
  const {
    setWindActive,
    setCampfireActive,
    setRainActive,
    setBirdsActive,
  } = useSound();

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
        <Button icon={'settings'} margin={32} />
        <Button
          icon={'pause'}
          center
          margin={-62}
          onPress={() => {
            [
              setWindActive,
              setCampfireActive,
              setRainActive,
              setBirdsActive,
            ].forEach((active) => {
              active(false);
            });
          }}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SoundSelection;
