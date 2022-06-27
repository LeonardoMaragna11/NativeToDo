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
    
    return(
        <View style={styles.container}>
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