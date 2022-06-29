import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../services/firebaseConnection.js';


export default function Cadastro() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  async function cadastrar(){
    await createUserWithEmailAndPassword(auth, email, password)
      .then(value=>{
        navigation.navigate('Login')
        console.log('cadastrado com sucesso! \n'+value.user.uid);
      }).catch(erro => console.log(erro))
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}> Email: </Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(value)=>{
              setEmail(value)
            }}
          />
      </View>
      <View>
      <Text style={styles.label}> Senha: </Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry
          onChangeText={(value)=>{
            setPassword(value)
          }}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={()=> cadastrar()}>
        <Text style={styles.txtBtn}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('Logar')
      }}>
        <Text style={styles.infoTxt}>Já é usuario? Logar</Text>
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
    width:'300px',
    height: 30,
    color: '#E3E3E3',
    fontSize:'12pt',
    paddingLeft:'10px',
    marginBottom:'30px',
    marginTop:'10px'
  },
  label:{
    color: '#E3E3E3',
    fontSize:'12pt',
  },
  infoTxt:{
    color: '#E3E3E3',
    fontSize:'9pt',
  },
  btn:{
    backgroundColor:'#0a583e',
    width:'300px',
    height: 45,
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    marginBottom:'30px',
    marginTop:'30px',
  },
  txtBtn:{
    color: 'aliceblue',
    fontSize:'20pt',
  }
});
