import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/OBJECTS.png')}
        style={{ width: 200, height: 40 }}
        resizeMode="contain"
      />
      <Image
        source={require('../../../assets/TEXTS.png')}
        style={{ width: 172, height: 50 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
