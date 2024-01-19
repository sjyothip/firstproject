import React from 'react'
import { StyleSheet, TouchableOpacity , View , Text } from 'react-native'

const Radiobutton = () => {
  const [radiosel,setRadiosel] = useState(1)

  const skills =[
    {
      id:1,
      name:'JAVA'
    },{
      id:2,
      name:'PYTHON'
    },{
      id:3,
      name:'PHP'
    },{
      id:4,
      name:'SQL'
    },
  ]
  return (
    <View>
    <View>
      <ScrollView>
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setRadiosel(1)}>
        <View style={styles.radiowrapper}>
          <View style={styles.radio}>
            {
              radiosel==1 ? <View style={styles.radiobg}></View> : null
            } 
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setRadiosel(2)}>
        <View style={styles.radiowrapper}>
          <View style={styles.radio}>
            {
              radiosel==2 ? <View style={styles.radiobg}></View> : null
            }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
      
    </View>
    <View>
      <Text>Dynamic Radio Button</Text>
      {
        skills.map((item,index)=> <TouchableOpacity key={index} onPress={()=>setRadiosel(item.id)}>
          <View style={styles.radiowrapper}>
            <View style={styles.radio}>
              {
                radiosel==item.id ? <View style={styles.radiobg}></View> : null
              }
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>)
      }
      </View>
      </ScrollView>
    </View> 

    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'white',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  radioText:{
    fontSize:20,
    color:'skyblue'
  },
  radio:{
    height:40,
    width:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,
    margin:10
  },
  radiowrapper:{
    flexDirection:'row',
    alignItems:'center'
  },
  radiobg:{
    backgroundColor:'black',
    height:28,
    width:28,
    borderRadius:20, 
    margin:4
  }
})


export default Radiobutton