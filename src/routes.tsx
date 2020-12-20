import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
// import OtherComponent from './pages/OtherComponent';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#970B05',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="OtherComponent" component={OtherComponent} /> */}
    </Stack.Navigator>
  );
};

export default Routes;
