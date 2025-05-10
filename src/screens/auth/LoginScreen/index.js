import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/back-arrow.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Continue with</Text>
        <Text style={styles.subtitle}>
          We'll text a code to verify your phone number
        </Text>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('PhoneInputScreen')}>
        <Text style={styles.loginButtonText}>Continue with Phone</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.loginButton, styles.emailButton]}>
        <Text style={[styles.loginButtonText, styles.emailButtonText]}>
          Continue with Email
        </Text>
      </TouchableOpacity>

      <Text style={styles.or}>or</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../../assets/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../../assets/facebook.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../../assets/apple.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../../assets/Frame.png')}
        style={{width: 390, height: 400}}
      />
    </View>
  );
};

export default LoginScreen;
