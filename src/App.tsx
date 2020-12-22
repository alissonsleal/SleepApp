import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './routes';
import SoundProvider from './context/ActiveSounds';

const App: React.FC = () => {
  return (
    <SoundProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor="#131516"
          barStyle="light-content"
          translucent
        />

        <Routes />
      </NavigationContainer>
    </SoundProvider>
  );
};
export default App;
