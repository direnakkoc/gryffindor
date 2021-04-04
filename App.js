/* App is working as our navigator root when the user log app.js send to Login where is the main page
Requirements:
installation of package
- npm install @react-navigation/stack 

!dont forget check the path of Navigator!!*/

import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './pages/Navigator'
export default function App(){

  return (
    <NavigationContainer>
<Navigator/>
    </NavigationContainer>
  )
  
}