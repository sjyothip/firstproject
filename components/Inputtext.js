import React, {useState} from 'react'
import {
    Text,
    View,
    TextInput, 
    StyleSheet,
    Button
  } from 'react-native';

const Inputtext = () => {
    const [name,setName] = useState("");    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [display,setDisplay] = useState(false);

    const resetFormData =()=>{
        setDisplay(false);
        setName("");
        setEmail("");
        setPassword("");

    }

  return (
    <View>
        <Text style={{fontSize:30,color:'violet'}}> Simple Form :  </Text>
        <TextInput style={styles.textInput}
            placeholder="Enter Your Name"
            onChangeText = {(text)=>setName(text)}
            value={name}
        />

        <TextInput style={styles.textInput}
            placeholder="Enter Your email"
            onChangeText = {(text)=>setEmail(text)}
            value={email}
        />  

        <TextInput style={styles.textInput}
            placeholder="Enter Your Name"
            secureTextEntry={true}
            onChangeText = {(text)=>setPassword(text)}
            value={password}
        />  
        <View style={{marginBottom:10}}>
        <Button color={"green"} 
        title='Print Details'
        onPress={()=>setDisplay(true)} />
        <Button title='Clear Details' onPress={resetFormData} />

        {
            display ?
            <View>
                <Text style={{fontSize:25}}>User Name is : {name}</Text>
                <Text style={{fontSize:25}}>User Email is : {email}</Text>
                <Text style={{fontSize:25}}>User Password is : {password}</Text>
            </View>
            :null
        }
        </View>


    </View>
    )
              
}

const styles = StyleSheet.create({
    textInput: {
      fontSize:20,
      color:'green',
    //   backgroundColor:'Blue',
      borderColor:'blue',
      borderWidth:2,
      margin:10,

    }
  })
export default Inputtext