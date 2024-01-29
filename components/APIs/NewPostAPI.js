import React, {useState} from 'react'
import { View, Text, Button , StyleSheet, TextInput} from 'react-native'

const NewPostAPI = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const saveData = async () =>{
        if (!name){
            setNameError(true)
        }else{
            setNameError(false)
        }
        if (!age){
            setAgeError(true)
        }else{
            setAgeError(false)
        }
        if (!email){
            setEmailError(true)
        }else{
            setEmailError(false)
        }
        if (!name || !age || !email){
            return false
        }

        // const url = "http://10.0.0.1:3000/users";
        const url = "http://192.168.0.112:3000/users"
        let result = await fetch(url, {
            method:"POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({name,age,email})
        })
        result = await result.json();
        if(result){
            console.warn("Data Added");
        }
    }

  return (
    <View> 
        <Text style={{fontSize:20}} > POST with Input Fields </Text> 
        <TextInput style={styles.input} 
            value={name} 
            onChangeText={(text) =>setName(text)}
            placeholder = "Enter the name: " />
        {nameError ? <Text style={styles.errorText}>Please enter the valid Name: </Text> : null }
        <TextInput style={styles.input} 
            value={age} 
            onChangeText={(text) =>setAge(text)}
            placeholder = "Enter the Age: " />
        {ageError ? <Text style={styles.errorText}>Please enter the valid Age: </Text> : null }

        <TextInput style={styles.input} 
            value={email} 
            onChangeText={(text) =>setEmail(text)}
            placeholder = "Enter the Email: " />
        {emailError ? <Text style={styles.errorText}>Please enter the valid Email: </Text> : null }
        <Button title="Save Data" onPress={saveData} />
    </View>
      )
}

const styles= StyleSheet.create({
    input:{
        borderColor:'skyblue',
        borderWidth:1,
        margin:20,
        fontSize:20

    },
    errorText:{
        color:'red'
    }
})

export default NewPostAPI