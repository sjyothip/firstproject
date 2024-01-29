
import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';
// import UserData from './components/UserDetails';
// import Firstcomp from './components/Firstcomp';
// import Inputtext from './components/Inputtext';
// import Flatlistcreate from './components/Flatlistcreate';
// import MapList from './components/MapList';
// import Dynamicgrid from './components/Dynamicgrid';
// import Componentloop from './components/Componentloop';
// import Sectionlist from './components/Sectionlist';
// import Component from './components/claascomp';
// import Hookscomp from './components/Hookscomp';

// import Hookscomp from './components/Hookscomp';
// import Showhide from './components/Showhide';
// import Unmountt from './components/Unmountt';
// import ResponsiveUI from './components/ResponsiveUI';
// import StyleButton from './components/StyleButton';
// import Radiobutton from './components/Radiobutton';
// import Nav from './components/Nav';
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Login from './components/Login';
// import Homescreen from './components/Homescreen';
// import PostAPI from './components/APIs/PostAPI';
// import NewPostAPI from './components/APIs/NewPostAPI';
import GetAPIData from './components/APIs/GetAPIData';


// const Stack = createNativeStackNavigator();

const App = () => {

  return ( 
    <View>
      {/* <PostAPI /> */}
      {/* <NewPostAPI /> */}
      <GetAPIData />


      {/* <Text>Mewhfgfh</Text> */}
    </View>
  )}
    // <NavigationContainer>
    //     <Stack.Navigator
    //           screenOptions={{
    //           headerStyle:{
    //             backgroundColor:'blue',
    //           },
    //           headerTintColor:'orange',
    //           headerTitleStyle:{
    //             fontSize:25
    //           }
    //         }}
    //       >
    //       <Stack.Screen name = 'Login' component={Login} 
    //           options={{
    //             headerTitle:()=><Button title='Left'/>,
    //             headerRight:()=><Header/>,
    //             title:"User Login",
    //             headerStyle:{
    //               backgroundColor:'sky blue',
    //             },
    //             headerTintColor:'red',
    //             headerTitleStyle:{
    //             fontSize:40
    //           }
    //         }}
    //       />
    //       <Stack.Screen name='Home' component={Homescreen} />
    //     </Stack.Navigator> 
    // </NavigationContainer>
      // )
// };

// const Header=()=>{
//   return(<TextInput placeholder='name' />)
// }




export default App;
