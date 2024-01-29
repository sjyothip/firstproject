import React from 'react'
import { View, Text, Button } from 'react-native'

const PostAPI = () => {
    // console.warn("fer")
    const saveData = async () =>{
        const data={
            id:2,
            name:'Neeraj',
            age : 21
        }
        // const url = "http://10.0.2.2:3000/users";
        const url = "http://192.168.0.112:3000/users"
        let result = await fetch(url, {
            method:"POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        })
        result = await result.json();
        console.warn(result);
    }

  return (
    <View> 
        <Text style={{fontSize:20}} > Simple API POST </Text> 
        <Button title="Save Data" onPress={saveData} />
    </View>
      )
}

export default PostAPI