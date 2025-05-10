// StackNavigator.tsx
import React from 'react';

import { NavigationRoutes } from './NavigationRoutes';
import SplashScreen from '../screens/auth/SplashScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationRoutes.splashScreen} component={SplashScreen} />
      <Stack.Screen name={NavigationRoutes.onboardingScreen} component={OnboardingScreen} />
      <Stack.Screen name={NavigationRoutes.loginScreen} component={LoginScreen} />
      {/* <Stack.Screen name="PhoneInputScreen" component={PhoneInputScreen} /> */} 
      {/* <Stack.Screen name="OTPScreen" component={OTPScreen} />*/}
    </Stack.Navigator>
  );
};

export default StackNavigator;
