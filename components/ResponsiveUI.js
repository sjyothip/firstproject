import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

const ResponsiveUI = () => {
  return (
    <View>
        <Text> RESPONSIVE UI </Text>
        <View style={styles.main}><Text>1st</Text></View>
        <View style={styles.box}><Text>2nd</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
    main : {
        backgroundColor:'orange',
        margin:1,
        flex:1,
        // flexDirection:'row'
    },
    box:{
        flex:2,
        margin:1,
        backgroundColor:'green'
    }
    
})

export default ResponsiveUI