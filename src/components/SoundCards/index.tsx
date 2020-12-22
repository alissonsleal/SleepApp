import React, { useCallback, useEffect } from 'react';
import TrackPlayer, {
  State,
  Capability,
  usePlaybackState,
} from 'react-native-track-player';

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

import {
  windTrack,
  campfireTrack,
  rainTrack,
  birdsTrack,
} from '../../data/Tracks';

const SoundCards: React.FC = () => {
  useEffect(() => {
    setup();
  }, []);

  const playbackState = usePlaybackState();

  const { windActive, setWindActive } = useSound();
  const { campfireActive, setCampfireActive } = useSound();
  const { rainActive, setRainActive } = useSound();
  const { birdsActive, setBirdsActive } = useSound();

  const handleWind = useCallback(() => {
    setWindActive(!windActive);
    togglePlayback(windTrack);
  }, [windActive]);

  const handleCampfire = useCallback(() => {
    setCampfireActive(!campfireActive);
    togglePlayback(campfireTrack);
  }, [campfireActive]);

  const handleRain = useCallback(() => {
    setRainActive(!rainActive);
    togglePlayback(rainTrack);
  }, [rainActive]);

  const handleBirds = useCallback(() => {
    setBirdsActive(!birdsActive);
    togglePlayback(birdsTrack);
  }, [birdsActive]);

  const setup = async () => {
    await TrackPlayer.setupPlayer();

    await TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
    });
  };

  async function togglePlayback(soundTrack: any) {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log(currentTrack);
    await TrackPlayer.reset();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(soundTrack);

      await TrackPlayer.play();
    } else {
      if (playbackState === State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

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
