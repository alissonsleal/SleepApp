import React from 'react';

import {
  Container,
  BackgroundBall,
  SearchBarContainer,
  SearchBar,
  SearchIcon,
} from './styles';
import { MainText } from '../Home/styles';

const SoundSelection: React.FC = () => {
  return (
    <Container>
      <BackgroundBall />
      <MainText>My Sounds</MainText>
      <SearchBarContainer>
        <SearchIcon name="search" size={24} />
        <SearchBar />
      </SearchBarContainer>
    </Container>
  );
};

export default SoundSelection;
