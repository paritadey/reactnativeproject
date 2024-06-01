import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace('Login');
      }, 5000);
      return () => clearTimeout(timer);
    }, [navigation]);
  
    return (
      <ImageBackground
        source={require('../assets/splashscreen.jpg')} // Ensure this path is correct
        style={styles.background}
      >
      
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    overlay: {
      backgroundColor: 'rgba(91, 15, 143, 0.5)', // Optional overlay to make text more readable
      padding: 20,
      borderRadius: 10,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
  });
  
  export default SplashScreen;
  