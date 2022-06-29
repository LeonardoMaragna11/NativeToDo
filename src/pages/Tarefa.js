import React from 'react';
import { createClient } from '@supabase/supabase-js'
import { 
        StyleSheet, 
        Text, 
        View, 
        TextInput, 
        Button,
        TouchableOpacity,      
        DatePickerAndroid
} from 'react-native';

export default function Tarefas({navigation, route}){
    const supabaseUrl = 'https://nsxsxomxuherhlnezgzy.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zeHN4b214dWhlcmhsbmV6Z3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyOTI3NzksImV4cCI6MTk3MTg2ODc3OX0.XiUP6XR2czW53xcgApHSjBLWKaVNXe6RU0kpagB_1Eg'
    const supabase = createClient(supabaseUrl, supabaseKey)
    const [listaTarefa, setTarefa] = React.useState()
    React.useEffect(()=>{
        supabase
          .from('tb_tarefas')
          .select('*')
          .eq('id_tr', id)
          .then(({ data })=>{
            setTarefa(data)
          })
      }, [])

    const id = route.params.id
    console.log(typeof listaTarefa);
    console.log(listaTarefa);
    console.log(listaTarefa);

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{}</Text>
            <View style={styles.cxDescricao}></View>
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
    },
    cxDescricao:{
        width: '288px',
        height: '246px',
        backgroundColor:'#232323',
    }
  });