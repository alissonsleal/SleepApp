import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import {
  Container,
  Background,
  MainText,
  SecondaryText,
  UpperContainer,
  LowerContainer,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <UpperContainer>
        <MainText>Welcome to sleep</MainText>
        <SecondaryText>A better way to sleep is here for you</SecondaryText>
      </UpperContainer>

      <Background />

      <LowerContainer>
        <MainText>Best Sounds to Sleep</MainText>
        <SecondaryText>Select the sounds you will sleep to</SecondaryText>
        <Button
          onPress={() => {
            navigation.navigate('SoundSelection');
          }}
          icon={'arrow-right'}
        />
      </LowerContainer>
    </Container>
  );
};

export default Home;
