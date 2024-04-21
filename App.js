import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import CustomNavigationBar from './src/CustomNavigationBar';
import Excersise2 from './src/Excersise2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Excersise2/>
  );
};

export default App;

