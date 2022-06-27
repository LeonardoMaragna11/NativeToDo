import React from 'react';
import { 
        StyleSheet, 
        Text, 
        View, 
        TextInput, 
        Button,
        TouchableOpacity      
} from 'react-native';

import { createClient } from '@supabase/supabase-js'
export default function Home({ route, navigation }){
  const supabaseUrl = 'https://nsxsxomxuherhlnezgzy.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zeHN4b214dWhlcmhsbmV6Z3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyOTI3NzksImV4cCI6MTk3MTg2ODc3OX0.XiUP6XR2czW53xcgApHSjBLWKaVNXe6RU0kpagB_1Eg'
  const supabase = createClient(supabaseUrl, supabaseKey)
  const [listaTarefa, setTarefa] = React.useState([])
  React.useEffect(()=>{
    supabase
      .from('tb_tarefas')
      .select('*')
      .then(({ data })=>{
        setTarefa(data)
        console.log(data);
      })
  }, [])
    return(
        <View style={styles.container}>
          <ListarTarefas tarefas={listaTarefa}/>
            <Button 
                title='Sair'
                onPress={()=>{
                navigation.navigate('Logar')}}
            />
        </View>
    )
}

function ListarTarefas(props){
  return(
    <View>
      {props.tarefas.map((tarefas)=>{
        return(
          <View key={tarefas.id_ta}>
            <Text>{tarefas.titulo_ta}</Text>
            <Text>{tarefas.descricao_ta}</Text>
            {console.log(tarefas)}
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