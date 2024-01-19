import React, { useState } from 'react'
import { View , Button , Text } from 'react-native'

const Showhide = () => {
    const [show, setShow] = useState(false)
  return (
    <View>
        <Text style={{fontSize:30, color:'Blue'}} >Show / Hide Component</Text>
        <Text style = {{fontSize:30, color:'orange'}}> </Text>
        <Button title='Show Component' onPress={()=>setShow(true)} />
        <Button title='Hide Component' onPress={()=>setShow(false)} />
        <Button title='Toggle Component' onPress={()=>setShow(!show)} />
        {
            show == true ? <Users /> : null
        }

    </View>
  )
}

const Users=()=>{
    return(
        <View>
            <Text style={{fontSize:30}} > User Component </Text>
        </View>
    )
}

export default Showhide