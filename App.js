
//Page where is the link to the navigator.
//Libraries import to install the navigator
// npm install navigator
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './Components/Navigator'
export default function App(){

  return (
    <NavigationContainer>
<Navigator/>
    </NavigationContainer>
  )
  
}