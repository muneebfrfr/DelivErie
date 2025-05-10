// StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PhoneInputScreen" component={PhoneInputScreen} /> */}
      {/* <Stack.Screen name="OTPScreen" component={OTPScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
