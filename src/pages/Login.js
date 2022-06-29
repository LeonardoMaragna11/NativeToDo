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
import { auth } from '../services/firebaseConnection.js';



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
          secureTextEntry
          value={password}
          onChangeText={(value)=>{
            setPassword(value)
          }}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={()=> login()}>
        <Text style={styles.txtBtn}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('Cadastrar')
      }}>
        <Text style={styles.infoTxt}>Não é usuario? Cadastrar</Text>
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
