import React from 'react'
import { View, Text , SectionList} from 'react-native'

const Sectionlist = () => {
    const users=[
        {
            id:1,
            name:'Anil',
            data:["PHP", "JAVA", "PYTHON"]
        },{
            id:2,
            name:'Anil',
            data:["PHP2", "JAVA2", "PYTHON2"]
        },{
            id:3,
            name:'Anil',
            data:["PHP3", "JAVA3", "PYTHON3"]
        },{
            id:4,
            name:'Anil',
            data:["PHP4", "JAVA4", "PYTHON4"]
        },
    ]
  return (
    <View>
        <Text>SECTION LIST </Text>
        <SectionList 
        sections={users}
        renderItem = {({item})=><Text style={{fontSize:20}}>{item}</Text>}
        renderSectionHeader={({section:{name}})=>(
            <Text style={{fontSize:25,color:'red'}}>{name}</Text>
        )}
        />
    </View>
  )
}

export default Sectionlist