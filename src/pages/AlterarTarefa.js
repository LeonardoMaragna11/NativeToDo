import React from 'react';
import { createClient } from '@supabase/supabase-js'
import { 
        StyleSheet, 
        Text, 
        View, 
        TextInput, 
        Button,
        TouchableOpacity,
        Image
} from 'react-native';

async function _alterar(supabase, id, titulo_tr, descricao_tr){
  await supabase
  .from('tb_tarfas')
  .update({ titulo_tr: titulo_tr, descricao_tr: descricao_tr, })
  .eq('id_tr', id)
  .then(console.log('deu certo'))
  .catch(console.log('erro'))
}

export default function AlterarTarefa({navigation, route}){
    const supabaseUrl = 'https://nsxsxomxuherhlnezgzy.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zeHN4b214dWhlcmhsbmV6Z3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyOTI3NzksImV4cCI6MTk3MTg2ODc3OX0.XiUP6XR2czW53xcgApHSjBLWKaVNXe6RU0kpagB_1Eg'
    const supabase = createClient(supabaseUrl, supabaseKey)

    const [listaTarefa, setTarefa] = React.useState([]);
    const [us_tr, setUs_tr] = React.useState();
    const [nvTitulo_tr, setNvTitulo_tr] = React.useState();
    const [nvDescricao_tr, setNvDescricao_tr] =  React.useState();

    const id = route.params.id

    React.useEffect(()=>{
        supabase
          .from('tb_tarefas')
          .select('*')
          .eq('id_tr', id)
          .then(({ data })=>{
            setTarefa(data)
          })
      }, [])


    return(
        <View style={styles.container}>
          
          {listaTarefa.map((tarefa)=>{


                return(
              <View key={tarefa.id_tr} style={styles.container}>
                <TextInput 
                      style={styles.inputTitulo} 
                      value={nvTitulo_tr}
                      onChange={(txt)=>{
                        setNvTitulo_tr(txt)
                      }}
                />
                <Text style={styles.dataTxt}>{tarefa.data_tr}</Text>
                <View style={styles.cxDescricao}>
                  <TextInput 
                       
                      multiline
                      numberOfLines={20}
                      style={styles.descricaoTxt}
                      value={`\t${nvDescricao_tr}`}
                      onChange={(txt)=>{
                        setNvDescricao_tr(txt)
                      }}
                  />
                </View>
                <View style={{width:'100%', alignItems:'end', marginTop:'20px'}}>
                  <TouchableOpacity style={styles.btnEdiSav} onPress={(id, )=>{
                    _alterar(supabase, id, nvTitulo_tr, nvDescricao_tr)
                  }}>
                    <Image style={styles.imgBtn} source={require('../../assets/disket.png')}/>
                  </TouchableOpacity>
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
    },
    btnEdiSav:{
      borderRadius:'50%',
      width: '50px',
      height: '50px',
      backgroundColor:'#0A583E',
      alignItems:'center',
      justifyContent:'center',
    },
    imgBtn:{
      width: '80%',
      height: '80%',
    },
    inputTitulo:{
      color: 'aliceblue',
      fontSize:'24pt',
      textAlign:'left',
      width: '80%',
    }
  });