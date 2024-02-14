import React from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

const ButtonTypes = () => {
  return (
<View>
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
