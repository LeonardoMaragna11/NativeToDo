import React from 'react';
import { createClient } from '@supabase/supabase-js'
import { 
        StyleSheet, 
        Text, 
        View, 
        TextInput, 
        Button,
        TouchableOpacity      
} from 'react-native';

const {id, email} = route.params
  if(id == null && id == undefined && id == ''){
    navigation.navigate('Login')
  }
  React.useEffect(()=>{
    supabase
      .from('tb_tarefas')
      .select('*')
      .eq('id_us', id)
      .then(({ data })=>{
        setTarefa(data)
      })
  }, [])

export default function Tarefas(){
    return(
        <View style={styles.container}>
            {id}
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
    titulo:{
      color: 'aliceblue',
      fontSize:'24pt',
      textAlign:'left',
      width: '80%',
      padding:'10px'
    },
    cxTarefas:{
      width: '80%',
      minHeight:'402px', 
      padding: '10px',
    },
    card:{
      backgroundColor:'#636363',
      height: '50px',
      width: '100%',
      justifyContent:'space-between',
      flexDirection:'row', 
      padding: '10px',
      borderRadius:'10px'
    },
    text:{
      color: 'aliceblue',

    }
  });