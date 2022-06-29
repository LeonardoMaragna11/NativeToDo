import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator  } from '@react-navigation/drawer'

import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Tarefas from './src/pages/Tarefa';

const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, marginRight:'30px' }}
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
            color: 'aliceblue',
            fontWeight: 'bold',
            shadowOpacity:0,
            elevation: 0,
          },
          headerTitle: () => (<Text style={styles.headerTitle}>Logar</Text>),
          headerRight: ()=> (<LogoTitle/>),
          headerLeft: ()=>{false},
          headerTitleAlign: 'center'
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
          headerTitle: () => (<Text style={styles.headerTitle}>Cadastrar</Text>),
          headerRight: ()=> (<LogoTitle/>),
          headerLeft: ()=>{false},
          headerTitleAlign: 'center'
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
          headerTitle: () => (<Text style={styles.headerTitle}>Home</Text>),
          headerRight: ()=> (<LogoTitle/>),
          headerTitleAlign: 'center'
        }} name="Home" component={Home} />

        <Stack.Screen options={{
          title: 'Tarefas',
          headerStyle: {
            backgroundColor: '#0a583e',
          },
          headerTintColor: 'aliceblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (<Text style={styles.headerTitle}>Tarefas</Text>),
          headerRight: ()=> (<LogoTitle/>),
          headerTitleAlign: 'center'
        }} name="Tarefas" component={Tarefas} />

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
  headerTitle:{
    color:'aliceblue', 
    fontFamily: 'Segoe UI',
    fontSize:'25pt',
  }
});
