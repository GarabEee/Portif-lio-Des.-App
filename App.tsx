import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Circle = () => (
  <View style={styles.circleContainer}>
    <Image
      source={require('./assets/imagens/WhatsApp Image 2024-09-30 at 18.42.57.jpeg')}
      style={styles.image} 
    />
  </View>
);

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const openFirstLink = () => {
    Linking.openURL('https://www.linkedin.com/in/gabriel-romagnolo-448701273/');
  };

  const openSecondLink = () => {
    Linking.openURL('https://github.com/GarabEee'); 
  };

  return (
    <View style={styles.container}>
      {/* Nome no topo, centralizado */}
      <Text style={styles.name}>Gabriel Vinicius Aparecido Romagnolo</Text>

      <Circle />
      <View style={styles.buttonContainer}>
        <Button title="Minhas Skills" color={"purple"} onPress={() => navigation.navigate('MinhaSkills')} />
        <Button title="Linkedin" color={"purple"} onPress={openFirstLink} />
        <Button title="GitHub" color={"purple"} onPress={openSecondLink} />
      </View>

      {/* Texto do email padronizado */}
      <Text style={styles.email}>romagnologabriel.04@gmail.com</Text>
    </View>
  );
};

const MinhaSkills = () => {
  return (
    <View style={styles.container}>
      <Circle />
      <Text style={styles.title}>Minhas Skills</Text>
      <Text style={styles.skill}>CSS: ⭐️⭐️⭐️⭐️</Text>
      <Text style={styles.skill}>Java: ⭐️⭐️</Text>
      <Text style={styles.skill}>React Native: ⭐️⭐️⭐️</Text>
      <Text style={styles.skill}>PHP: ⭐️⭐️</Text>
      <Text style={styles.skill}>Banco de Dados: ⭐️⭐️⭐️⭐️</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MinhaSkills" component={MinhaSkills} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 50,
    color: 'black',
  },
  circleContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 180,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
    width: '100%',
  },
  skill: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    marginVertical: 5,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    width: '80%',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    textAlign: 'center', 
  },
});
