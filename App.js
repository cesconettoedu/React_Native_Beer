import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import ListBeerScreen from './screen/ListBeerScreen'
import AddScreen from './screen/AddScreen';

import 'react-native-url-polyfill/auto';

const Stack = createNativeStackNavigator();

function MyStack () {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
       }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListBeerScreen" component={ListBeerScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Screen name="EditScreen" component={AddScreen} />
      </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


