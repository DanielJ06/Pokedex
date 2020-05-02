import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Card, Header, Body } from './styles';

export default function BottomSheet() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = event.nativeEvent;
      let opened = false;
      offset += translationY;

      if (translationY >= 200) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 500 : 0,
        duration: 300,
      }).start(() => {
        offset = opened ? 500 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}>
      <Card
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-300, 0, 500],
                outputRange: [-30, 0, 620],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Header
        style={{
          opacity: translateY.interpolate({
            inputRange: [0, 400],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
        }}>
        Vreeland
      </Header>
      <Body
        style={{
          opacity: translateY.interpolate({
            inputRange: [0, 400],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
        }}></Body>
      </Card>
    </PanGestureHandler>
  );
}
