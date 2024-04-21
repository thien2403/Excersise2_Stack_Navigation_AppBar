import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CustomNavigationBar from './CustomNavigationBar'; // Corrected import statement

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />, // Corrected component name
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
export default MyStack;
