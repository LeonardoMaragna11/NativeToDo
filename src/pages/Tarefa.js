import React from 'react';
import { createClient } from '@supabase/supabase-js'
import { 
        StyleSheet, 
        Text, 
        View, 
        TextInput, 
        Button,
        TouchableOpacity,
} from 'react-native';

export default function Tarefas({navigation, route}){
    const supabaseUrl = 'https://nsxsxomxuherhlnezgzy.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zeHN4b214dWhlcmhsbmV6Z3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyOTI3NzksImV4cCI6MTk3MTg2ODc3OX0.XiUP6XR2czW53xcgApHSjBLWKaVNXe6RU0kpagB_1Eg'
    const supabase = createClient(supabaseUrl, supabaseKey)
    const [listaTarefa, setTarefa] = React.useState([])
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
    
    return(
        <View style={styles.container}>
          {listaTarefa.map((tarefa)=>{
            return(
              <View style={styles.container}>
                <Text style={styles.titulo}>{tarefa.titulo_tr}</Text>
                <Text style={styles.dataTxt}>{tarefa.data_tr}</Text>
                <View style={styles.cxDescricao}>
                  <Text style={styles.descricaoTxt}>{`\t${tarefa.descricao_tr}`}</Text>
                </View>
              </View>
            )
          })}
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
      width: '100%',
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
        padding: '10px'
    },
    dataTxt:{
      color: 'aliceblue',
      textAlign:'right',
      width: '80%',
      paddingRight:'1px'
    },
    descricaoTxt:{
      color: 'aliceblue',
      fontSize:'12pt'
    }
  });