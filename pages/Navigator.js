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

const Stack = createStackNavigator();

export default function Navigator() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            gestureEnabled: true,
            headerStyle: {
                backgroundColor: '#101010'

            },
            headerTitleStyle: {
                fontStyle: 'normal',
                fontFamily: 'Pacifico',
                fontSize: 30,
                fontWeight: 'bold'


            },
            headerTintColor: '#ffd700'
        }}>

            <Stack.Screen name='Gryffindor' component={Login}   />
            <Stack.Screen name='About us' component={index}  />
            <Stack.Screen name='camera' component={Camera}  />


        </Stack.Navigator>


    )
}