import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#131516"
        barStyle="light-content"
        translucent
      />
      {/* change this to your preferences */}
      <Routes />
    </NavigationContainer>
  );
};
export default App;
