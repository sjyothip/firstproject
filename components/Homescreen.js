
import React , { useState } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  SectionList
} from 'react-native';
import ButtonTypes from './ButtonTypes';
import ResponsiveUI from './ResponsiveUI';
import StyleButton from './StyleButton';
import Componentloop from './Componentloop';
import Dynamicgrid from './Dynamicgrid';
import Firstcomp from './Firstcomp';
import Flatlistcreate from './Flatlistcreate';
import Hookscomp from './Hookscomp';
// import Claascomp from './claascomps';
import UserDetails from './UserDetails';
import Inputtext from './Inputtext';
import MapList from './MapList';
import Newnpm from './Newnpm';
import Radiobutton from './Radiobutton';
import Showhide from './Showhide';
import Unmountt from './Unmountt';
import GetAPIData from './APIs/GetAPIData';
import NewPostAPI from './APIs/NewPostAPI';
import PostAPI from './APIs/PostAPI';
const Home =(props)=>{
    return(
      <View>
        <ScrollView>
          <View style={{flex:1, justifyContent:'center'}}>
            <Text>Home Screen</Text>
          </View>
          <View><ButtonTypes /></View>
          <View><ResponsiveUI /></View>
          <View><StyleButton /></View>
          {/* <View><Claascomp /></View> */}
          <View><Componentloop /></View>
          <View><Dynamicgrid /></View>
          <View><Firstcomp /></View>
          <View><Flatlistcreate /></View>
          <View><Hookscomp /></View>
          <View><Inputtext /></View>
          <View><MapList /></View>
          <View><Newnpm /></View>
          {/* <View><Radiobutton /></View> */}
          {/* <View><SectionList /></View> */}
          <View><Showhide /></View>
          {/* <View><Unmountt /></View> */}
          <View><UserDetails /></View>
          <View><GetAPIData /></View>
          <View><NewPostAPI /></View>
          <View><PostAPI /></View>

          </ScrollView>
      </View>
    )
  }

export default Home