import React from 'react';

import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
  Container,
  BackgroundBall,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
  ButtonView,
  EmptyView,
} from './styles';

import TrackPlayer from 'react-native-track-player';

import { MainText } from '../Home/styles';
import CategorySlider from '../../components/CategorySlider';
import SoundCards from '../../components/SoundCards';
import Button from '../../components/Button';

import { useSound } from '../../context/ActiveSounds';

const SoundSelection: React.FC = () => {
  const {
    windActive,
    setWindActive,
    campfireActive,
    setCampfireActive,
    rainActive,
    setRainActive,
    birdsActive,
    setBirdsActive,
  } = useSound();

  const togglePlay = async () => {
    [setWindActive, setCampfireActive, setRainActive, setBirdsActive].forEach(
      (active) => {
        active(false);
      },
    );

    await TrackPlayer.reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <BackgroundBall />
        <MainText>My Sounds</MainText>
        <SearchBarContainer>
          <SearchIcon name="search" size={24} />
          <SearchBar />
        </SearchBarContainer>
        <CategorySlider active="Nature" categories={['ASMR', 'Others']} />
        <SoundCards />
        <ButtonView>
          <EmptyView />
          {windActive || campfireActive || rainActive || birdsActive ? (
            <Button
              icon={'stop-circle'}
              // center
              // margin={-62}
              size={52}
              onPress={togglePlay}
            />
          ) : (
            <EmptyView />
          )}
          <Button icon={'settings'} margin={32} />
        </ButtonView>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SoundSelection;
