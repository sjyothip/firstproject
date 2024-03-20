import React, {useState} from 'react'
import {
    Text,
    View,
    TextInput, 
    StyleSheet,
    ScrollView,
    FlatList
  } from 'react-native';
const Flatlistcreate = () => {
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
            name:'Rams',
            age:12
        },
        {
            id:5,
            name:'Anidfl',
            age:12
        },
        {
            id:6,
            name:'Samr',
            age:15
        },
        {
            id:7,
            name:'Annntrd',
            age:16
        },
        {
            id:8,
            name:'Ramt',
            age:12
        },
        {
            id:9,
            name:'Anilu',
            age:12
        },
        {
            id:10,
            name:'Samu',
            age:15
        },
        {
            id:11,
            name:'lamu',
            age:16
        },
        {
            id:12,
            name:'Ramu',
            age:12
        }
    ]
    
  return (
    <View>
    <ScrollView style={{marginBottom:50}}>

        <Text style={{fontSize:30}}> List with Flat List Creation </Text>
        <FlatList
        data={users}
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
        // renderItem={({item})=><Text style={styles.item}>{item.age}</Text>}
        KeyExtractor={item=>item.id}
        />
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
 
export default Flatlistcreate