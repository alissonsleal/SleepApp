import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  icon: string;
  center?: boolean;
  margin?: number;
  size?: number;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  center,
  margin,
  size,
  ...rest
}) => {
  return (
    <Container center={center} margin={margin} {...rest}>
      <Icon name={icon} size={size || 38} color="#FFFFFF" />
    </Container>
  );
};

export default Button;
