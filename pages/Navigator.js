/*This page is for navigation is like a root on our application
Make sure every package is on your computer before running

Requirements:
-package npm install @react-navigation/stack
-import from folder pages {Login/indexM/ Camera}
*/

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import index from './indexM'
import Camera from './Camera'

//create a Navigator
const Stack = createStackNavigator();
//Function default 
export default function Navigator() {
    return ( //return the root 
        <Stack.Navigator  initialRouteName='Home' /* HOME --main page default*/
        screenOptions={{
          gestureEnabled: true,
          
          headerStyle: {
            backgroundColor: '#101010'
            
          },
          headerTitleStyle: {
              fontStyle:'normal',
              fontFamily:'Pacifico',
              fontSize:30,
            fontWeight: 'bold'

            
          },
          headerTintColor: '#ffd700'
        }}>
            
            <Stack.Screen name='Gryffindor'component={Login}  /* HOME --main page *//>   
            <Stack.Screen name='About us'component={index}  /* About us *//>
            <Stack.Screen name='camera' component={Camera}  /* CAMERA */ />


        </Stack.Navigator>


    )
}
