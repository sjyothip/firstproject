import React, {useState} from 'react'
import {Text, View, Button} from 'react-native'

const Firstcomp = () => {
    const [name, setName] = useState('Anil')
    let data = "sam";
    function testName(){
        setName("Sid")
        data = 'peter';
    }

    return (
    <View>
        <Text style={{fontSize:30}}> Name : {name} </Text>
        <Button title= 'Press Here' onPress={testName} />
        <Text style={{fontSize:30}}> Data : {data} </Text>
        {/* <Button title= 'Press Here' onPress={data} /> */}
        </View>
        )
}

export default Firstcomp