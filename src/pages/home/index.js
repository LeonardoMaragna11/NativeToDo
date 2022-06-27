import React from 'react';
import { 
        StyleSheet, 
        Text, 
        View, 
        TextInput, 
        Button,
        TouchableOpacity      
} from 'react-native';

export default function Home({ route, navigation }){
  let dados;
  let link = 'https://frelas.000webhostapp.com/php/tarefas.php'
  fetch(link)
    .then(conteudo => conteudo.text())
    .then((texto) => {
        dados = JSON.parse(texto);
    });
    
    const {id, email} = route.params;
    return(
        <View style={styles.container}>
            <Text>{id}</Text>
            <Text>{email}</Text>
            <Button 
                title='Sair' 
                onPress={()=>{
                navigation.navigate('Logar')}}
            />
        </View>
    )
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