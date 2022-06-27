import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../services/firebaseConnection.js';


export default function Cadastro() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  async function cadastrar(){
    await createUserWithEmailAndPassword(auth, email, password)
      .then(value=>{
        console.log('cadastrado com sucesso! \n'+value.user.uid);
      }).catch(erro => console.log(erro))
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor="#ccc"
        value={email} 
        onChangeText={(value)=>{
          setEmail(value)
        }}
      />

      <TextInput
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={(value)=>{
          setPassword(value)
        }}
      />

      <Button 
        title="Cadastrar"
        onPress={()=> cadastrar()}
        color={'#0a583e'}
      />
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Logar')
      }}>
        <Text>Já é usuario? Logar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: '1px',
    borderBottomColor: '#000',
    marginTop: 5,
    width:'300px',
    height: 50,
    marginBottom:10,
    color: 'aliceblue',
    paddingLeft: '10px',
  }
});
