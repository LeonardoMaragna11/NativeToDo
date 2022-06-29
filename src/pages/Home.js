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
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Home({ route, navigation }){
  const supabaseUrl = 'https://nsxsxomxuherhlnezgzy.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zeHN4b214dWhlcmhsbmV6Z3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyOTI3NzksImV4cCI6MTk3MTg2ODc3OX0.XiUP6XR2czW53xcgApHSjBLWKaVNXe6RU0kpagB_1Eg'
  const supabase = createClient(supabaseUrl, supabaseKey)
  const [listaTarefa, setTarefa] = React.useState([])
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
    return(
        <View style={styles.container}>
          <Text style={styles.titulo}>Suas Tarefas:</Text>
          <ListarTarefas tarefas={listaTarefa} navigation={navigation}/>
            <Button 
                title='Sair'
                onPress={()=>{
                navigation.navigate('Logar')}}
            />
        </View>
    )
}

function ListarTarefas(props){
  if(props.tarefas.length > 0){
    return(
      <View style={styles.cxTarefas}>
        {props.tarefas.map((tarefas)=>{
          return(
            <TouchableOpacity 
              style={styles.card} key={tarefas.id_tr}
              onPress={()=>{
                props.navigation.navigate('Tarefas',{
                  id: tarefas.id_tr
                })
              }}
            >
              <Text style={styles.text}>{tarefas.titulo_tr}</Text>
              <Text style={styles.text}>{tarefas.data_tr}</Text>
            </TouchableOpacity>
          )
        })}
      
      </View>
    )
  }else{
    return(
      <View style={styles.cxTarefas}>
        <Text style={styles.text}>Não há Tarefas aqui...</Text>
      </View>
    )
  }
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
      borderRadius:'10px',
      marginBottom:'10px',
    },
    text:{
      color: 'aliceblue',

    }
  });