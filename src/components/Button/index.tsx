import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  icon: string;
}

const Button: React.FC<ButtonProps> = ({ icon, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name={icon} size={38} color="#FFFFFF" />
    </Container>
  );
};

export default Button;
