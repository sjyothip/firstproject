import React, {Component} from 'react'
import { View, Text, Button, TextInput } from 'react-native'


class comp extends Component{

    fruit =()=>{
        console.warn("Apple")
    }
render(){
    return(
        <View>
            <Text style={{fontSize:30, color:"red"}}>Class Component</Text>
            <TextInput placeholder='Enter Name' />
            <Button title='Press Me' onPress={this.fruit} />
        </View>
    )
}
}
export default comp;