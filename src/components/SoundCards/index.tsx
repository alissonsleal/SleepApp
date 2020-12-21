import React from 'react';

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
  return (
    <Container>
      <UpperCardContainer>
        <CardContainer>
          <ThumbnailImage source={windImage} />
          <ThumbnailText>Wind</ThumbnailText>
        </CardContainer>
        <CardContainer>
          <ThumbnailImage source={campfireImage} />
          <ThumbnailText>Campfire</ThumbnailText>
        </CardContainer>
      </UpperCardContainer>
      <LowerCardContainer>
        <CardContainer>
          <ThumbnailImage source={rainImage} />
          <ThumbnailText>Rain</ThumbnailText>
        </CardContainer>
        <CardContainer>
          <ThumbnailImage source={outsideImage} />
          <ThumbnailText>Birds</ThumbnailText>
        </CardContainer>
      </LowerCardContainer>
    </Container>
  );
};

export default SoundCards;
