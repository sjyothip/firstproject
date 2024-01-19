import React from 'react'
import {Text, View, FlatList, StyleSheet } from 'react-native'

const Componentloop=()=> {
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
        }]
  return (
    <View>
        <Text>Component Loop With FlatList</Text>
        <FlatList
        data={users}
        renderItem = {({item})=><UserData item={item}/>}
            />
    </View>
  )
}
const UserData =(props)=>{
    const item= props.item
    return(
        <View>
        <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.age}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        fontSize:24,
        backgroundColor:'orange',
        flex:1,
        margin:2,
        textAlign:'center'
    },
        box:{
            flexDirection:'row',
            borderWidth:2,
            borderColor:'orange',
            marginBottom:10
        }
    
})

export default Componentloop