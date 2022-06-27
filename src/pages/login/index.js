import React from 'react';
import { 
        StyleSheet, 
        Text, 
        View, 
        TextInput, 
        Button,
        TouchableOpacity      
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebaseConnection.js';


export default function Login({ navigation }) {

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  async function login(){
    await signInWithEmailAndPassword(auth, email, password)
      .then(value=>{
        navigation.navigate('Home',{
          id: value.user.uid,
          email: value.user.email,
        })
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
        secureTextEntry={true}
        keyboardType={'visible-password'}
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={(value)=>{
          setPassword(value)
        }}
      />

      <Button 
        title="Login"
        onPress={()=> login()}
        color={'#0a583e'}
      />
      <Text>Não é usuario? <TouchableOpacity onPress={()=>{
        navigation.navigate('Cadastrar')
      }}></TouchableOpacity> </Text>
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
