import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Text } from '../CategorySlider/styles';
import { css } from 'styled-components';

interface CardContainerProps {
  isActive: boolean;
}

export const Container = styled.View`
  margin-top: 48px;
  height: 316px;
  flex-direction: column;
  justify-content: space-between;
`;

export const UpperCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const LowerCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardContainer = styled.Pressable<CardContainerProps>`
  width: 144px;
  height: 144px;
  background-color: #27ddf2;
  border-radius: 20px;

  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isActive &&
    css`
      background-color: #b6b1ff;
      shadow-offset: 10px;
      elevation: 8;
    `}
`;

export const ThumbnailImage = styled(Image)``;

export const ThumbnailText = styled(Text)`
  margin-top: 12px;
  max-width: 130px;
`;
