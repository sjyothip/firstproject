import React from 'react'
import { 
    Text, 
    View ,
    Button,
    TouchableOpacity,
} from 'react-native'
import Firstcomp from './Firstcomp'

const ButtonTypes = (props) => {
    // console.log("props",props);
    function First(){
        <Firstcomp />
    }

  return (
<View className="justify-center item-center flex-1 bg-black">
    <View  >
    {/* <View {s`w-full h-full`}> */}
    {/* <View style={s 'bg-white pt-5'} class="grid grid-cols-4 gap-4"> */}
    <Text className="text-2xl text-bold text-white" >m1</Text>
    <Text className="text-red text-bold text-white" >m2</Text>
    <Text>m3</Text>
    <Text>m4</Text>
    <Text>m5</Text>
    <Text>m6</Text>
    <Text>m7</Text>
    <Text>m8 ---</Text>
    <Button title= 'Press Here' onPress={First} />

    </View>
    {/* <Text> */}
    <TouchableOpacity
        // key={index}
        onPress={() =>
            this.props.navigation.navigate('Dynamicgrid', {
            // url: news.url,
            url:"https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-medicine-pills-and-tablet-macro-view-of-pharmaceutical-pills-health-care-treatment-close-up-of-tablets-and-capsules-background-healthcare-industry-antibiotic-pills-medicine-health-supplement_rrhagnp_x_thumbnail-1080_01.png"
            })
        }>
        <Text>MESHVNDC</Text>
    </TouchableOpacity>
    {/* </Text> */}
</View>  )
}

export default ButtonTypes
