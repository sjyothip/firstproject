import React from 'react'
import {
    Text,
    View,
  } from 'react-native';
  

const UserData = () => {
    const name = "Anil"
    const age = 20
    const email = "Abe@test.com"
    return(
      <View>
        <Text style={{fontSize:30}}> Name : {name} </Text>
        <Text style={{fontSize:30}}> Age : {age} </Text>
        <Text style={{fontSize:30}}> Email : {email} </Text>
      </View>
  
    );
  
  };

export default UserData