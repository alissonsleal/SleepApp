import { css } from 'styled-components';
import styled from 'styled-components/native';

import { ButtonProps } from './index';

export const Container = styled.TouchableOpacity<ButtonProps>`
  height: 64px;
  width: 64px;
  background-color: #27ddf2;
  border-radius: 32px;
  elevation: 6;

  align-items: center;
  justify-content: center;
  align-self: flex-end;

  ${(props) =>
    props.center &&
    css`
      align-self: center;
    `}

  ${(props) =>
    props.margin &&
    css`
      margin-top: ${`${props.margin}px`};
    `}
`;
