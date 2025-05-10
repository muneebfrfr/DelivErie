import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Frame.png')}
        style={{ width: 410, height: 400 }}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Making your drive best is our responsibility
        </Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur
        </Text>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>
        <Text style={styles.terms}>
          By continuing, you agree that you have read and accept our
          <Text style={styles.link}> T&Cs </Text>
          and
          <Text style={styles.link}> Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default OnboardingScreen;
