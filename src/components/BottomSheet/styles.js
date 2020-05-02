import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100%;
  margin: 30px 20px;
  width: 90%;
  position: absolute;
`;

export const Header = styled(Animated.Text)`
  font-size: 30px;
  font-weight: bold;
  padding: 10px 10px 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #7159C1;
  color: #fff;
`;

export const Body = styled(Animated.View)``;
