import React,{useState} from 'react'
import {StyleSheet,Text, View, Switch} from 'react-native'



export default function Task(props){

    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={styles.container}>
       <View style={styles.checkboxContainer}>
         <Switch style={styles.checkbox}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        <Text style={styles.label}>{props.text}</Text>
        </View>
        </View>
    )
}

const styles= StyleSheet.create({
container:{
    textAlign:'center',
    justifyContent:'center'
},
checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginTop:15,
    fontSize:22
  },
})