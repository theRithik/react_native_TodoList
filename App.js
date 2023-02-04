import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Task from './component/task'

export default function App() {
const [task, setTask]=useState()
const [taskList, setTaskList] = useState([])

const handleClick=()=>{
  // console.log(task)
  setTaskList([...taskList, task])
  setTask(null)
}

  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.todo}>Todo List</Text>
      {
        taskList.map((item, index)=>{
          return <Task key={index} text={item}/>
        })
      }
      <Task text={'Getting up early in the Morning'}/>
     <Task text={'Studying Phyton'}/> 
</View>
     <TextInput style={styles.input} placeholder="Add more Task" value={task} onChangeText={text=>setTask(text)}/>
     <Button style={styles.button} title='Add' onPress={()=>handleClick()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    textAlign:'center',
    justifyContent:'center',
    marginLeft:50
  },
  todo:{
    fontSize:50,
  },
  input:{
    borderWidth:1,
    borderRadius:10,
    height: 40,
    width:300,
    
   }
});
