import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Cadastro from './src/pages/cadastro/index';
import Login from './src/pages/login/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';

const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require( './assets/LogoCode11.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'Logar',
          headerStyle: {
            backgroundColor: '#0a583e',
          },
          headerTintColor: 'aliceblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (<LogoTitle/>),
          // headerRight: ()=> (<Text>Login</Text>)
        }} name="Logar" component={Login} />
        <Stack.Screen options={{
          title: 'Cadastrar',
          headerStyle: {
            backgroundColor: '#0a583e',
          },
          headerTintColor: 'aliceblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (<LogoTitle/>),
          // headerRight: ()=> (<Text>Login</Text>)
        }} name="Cadastrar" component={Cadastro} />

         <Stack.Screen options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#0a583e',
          },
          headerTintColor: 'aliceblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (<LogoTitle/>),
          // headerRight: ()=> (<Text>Login</Text>)
        }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
