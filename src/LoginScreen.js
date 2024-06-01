import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
    <ImageBackground
        source={require('../assets/splashscreen.jpg')} // Ensure this path is correct
        style={styles.background}>
      
      <Image source={require('../assets/appicon.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        placeholderTextColor="#ffffff"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        placeholderTextColor="#ffffff"
        onChangeText={setPassword}
      />
      <Button 
      title="Login"
      buttonStyle={styles.button}
      titleStyle={styles.buttonText}
      onPress={handleLogin} />
      </ImageBackground>
    </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(91, 15, 143, 0.5)',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    color: "white"
  },
  input: {
    width: '80%',
    height: 40,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#B406CF',
    width: "65%",
    borderRadius: 20, // Adjust the value to get the desired roundness
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically

  },
  buttonText: {
    fontSize: 16,
    width: "90%",
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default LoginScreen;
