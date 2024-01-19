import React from 'react';
import { View , Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const Nav = () => {
  return ( 
  <View>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'Home' component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  </View>
      )
}

const Home =()=>{
  return(
    <View style={{flex:1, justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default Nav