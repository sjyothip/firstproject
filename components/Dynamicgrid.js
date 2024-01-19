import React from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'

const Dynamicgrid = () => {
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
      
        <Text>
            Grid with Dynamic Data
        </Text>
        <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
          {
            users.map((item)=><Text style={styles.item}>{item.name}</Text>)
          }
          {/* <Text style={styles.item}>Sam</Text> */}
        </View>
      </ScrollView>
    </View>

    )
}

const styles = StyleSheet.create({
    item: {
      fontSize:25,
      backgroundColor : 'blue',
      color:'#fff',
      margin:5,
      padding:5,
      width:120,
      height:120,
      textAlignVertical:'center',
      textAlign:'center'
    //   borderColor:'blue',
    //   borderWidth:2,

    }
  })

export default Dynamicgrid