import React , { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
const Login =(props)=>{
    // console.log(props)
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30}}>Login Screen</Text>
        <Button 
          title='Go to Home Page' 
          onPress={()=>props.navigation.navigate('Home')} 
          />
      </View>
    )
  }

  export default Login