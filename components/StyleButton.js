import React from 'react'
import {Text, View , TouchableHighlight, StyleSheet } from 'react-native'

const StyleButton = () => {
  return (
    <View>
        <Text>Style Button</Text>
        <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
        </TouchableHighlight>
        <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
        </TouchableHighlight>
        <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
        </TouchableHighlight>
        <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
        </TouchableHighlight>
    </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        backgroundColor:'#bbb',
        color:'#fff',
        padding:10,
        margin:10,
        fontSize:24,
        textAlign:'center',
        borderRadius:10,
        shadowColor:'red',
        elevation:10,
        shadowOpacity:1
    },
    success:{
        backgroundColor:'green'
    },
    primary:{
        backgroundColor:'blue'
    },
    error:{
        backgroundColor:'red'
    },
    warning : {
        backgroundColor:'orange',
    
    }
})

export default StyleButton