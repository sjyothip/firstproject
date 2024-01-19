import React from 'react'
import {
    Text,
    View,
    TextInput, 
    StyleSheet,
    ScrollView,
    FlatList
  } from 'react-native';

const MapList = () => {
    const users=[
        {
            id:1,
            name:'Anil',
            age:12
        },
        {
            id:2,
            name:'Sam',
            age:15
        },
        {
            id:3,
            name:'Annnd',
            age:16
        },
        {
            id:4,
            name:'Ram',
            age:12
        },
        {
            id:1,
            name:'Anil',
            age:12
        },
        {
            id:2,
            name:'Sam',
            age:15
        },
        {
            id:3,
            name:'Annnd',
            age:16
        },
        {
            id:4,
            name:'Ram',
            age:12
        },
        {
            id:1,
            name:'Anil',
            age:12
        },
        {
            id:2,
            name:'Sam',
            age:15
        },
        {
            id:3,
            name:'Annnd',
            age:16
        },
        {
            id:4,
            name:'Ram',
            age:12
        }
    ]
  return (
    <View>
        <Text style={{fontSize:30}}> List with Map Function </Text>
        <ScrollView style={{marginBottom:50}}>
        {
            users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
        </ScrollView>
         
        
    </View>
  )
}


const styles = StyleSheet.create({
    item:{
        fontSize:24,
        padding:10,
        color:'#fff',
        backgroundColor:'blue',
        borderColor:'black',
        borderWidth:1,
        margin:10
    }
}
)

export default MapList