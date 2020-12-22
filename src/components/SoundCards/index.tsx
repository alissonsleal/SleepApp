import React from 'react';

import { useSound } from '../../context/ActiveSounds';

import {
  Container,
  UpperCardContainer,
  LowerCardContainer,
  CardContainer,
  ThumbnailImage,
  ThumbnailText,
} from './styles';

import windImage from '../../../assets/images/nature.png';
import campfireImage from '../../../assets/images/campfire.png';
import rainImage from '../../../assets/images/raining.png';
import outsideImage from '../../../assets/images/outside.png';

const SoundCards: React.FC = () => {
  const { windActive, setWindActive } = useSound();
  const { campfireActive, setCampfireActive } = useSound();
  const { rainActive, setRainActive } = useSound();
  const { birdsActive, setBirdsActive } = useSound();

  const handleWind = () => {
    setWindActive(!windActive);
  };

  const handleCampfire = () => {
    setCampfireActive(!campfireActive);
  };

  const handleRain = () => {
    setRainActive(!rainActive);
  };

  const handleBirds = () => {
    setBirdsActive(!birdsActive);
  };

  return (
    <Container>
      <UpperCardContainer>
        <CardContainer isActive={windActive} onPress={handleWind}>
          <ThumbnailImage source={windImage} />
          <ThumbnailText>Wind</ThumbnailText>
        </CardContainer>

        <CardContainer isActive={campfireActive} onPress={handleCampfire}>
          <ThumbnailImage source={campfireImage} />
          <ThumbnailText>Campfire</ThumbnailText>
        </CardContainer>
      </UpperCardContainer>

      <LowerCardContainer>
        <CardContainer isActive={rainActive} onPress={handleRain}>
          <ThumbnailImage source={rainImage} />
          <ThumbnailText>Rain</ThumbnailText>
        </CardContainer>

        <CardContainer isActive={birdsActive} onPress={handleBirds}>
          <ThumbnailImage source={outsideImage} />
          <ThumbnailText>Birds</ThumbnailText>
        </CardContainer>
      </LowerCardContainer>
    </Container>
  );
};

export default SoundCards;
