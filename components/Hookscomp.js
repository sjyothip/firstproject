import React, { useEffect , useState } from 'react'
import { Button, Text , View } from 'react-native'

const Hookscomp = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);
    // useEffect(()=>{
    //     console.warn(count)
    //     // console.warn(data)
    // });
  return (
    <View>
        <Text style={{fontSize:30}}> {data} UseEffect as componentDidUpdate {count} </Text>
        <Button title='Update Counter' onPress={()=>setCount(count+1)} />
        <Button title='Update Data' onPress={()=>setData(data+1)} />
        <Users info={{data, count}} />
    </View>

    )
}

const Users=(props)=>{
    useEffect(()=>{
        console.warn("Run this code when data prop is updated")
        },[props.info.data]);
    useEffect(()=>{
        console.warn("Run this code when count prop is updated")
        },[props.info.count]);
        return(
            <View>
            <Text style={{fontSize:30, color:'blue'}}>  UseEffect as User Component </Text>
            <Text style={{fontSize:30 , color:'orange'}}>  data : {props.info.count} </Text>
            <Text style={{fontSize:30 , color:'orange'}}>  count : {props.info.data} </Text>
            </View>
        )
    }

export default Hookscomp