import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    Button
} from 'react-native'

const Unmountt = () => {
    const [show,setShow] = useState(true);
  return (
    <View>
        <Text></Text>
        <Button title='Toggle' onPress={()=>setShow(!show)} />
        {
            show ? <Student /> : null
        }

    </View>
  )
}

const Student=()=>{
    let timer = setInterval(() => {
        console.warn("Timer Called")
    }, 2);
    useEffect(()=>{
        return()=> clearInterval(timer)
            
    })
    return(
        <View>
            <Text>Student</Text>
        </View>
    )
}

export default Unmountt