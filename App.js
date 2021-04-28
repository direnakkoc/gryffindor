
//STEFFY
//App page where is the link to navigator
//Necessary installation install react-navigation/native
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './Components/Navigator'
export default function App(){
//retun the navigation
  return (
    <NavigationContainer>
<Navigator/>
    </NavigationContainer>
  )
  
}