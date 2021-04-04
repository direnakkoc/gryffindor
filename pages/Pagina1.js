// You have to install --> npm install @react-navigation/native
//                     --> npm install @react-navigation/stack
//                     --> npm install react-native-paper
//
import React, { useEffect, useState } from "react";
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar } from 'react-native-paper';
import {AppLoading} from 'expo'; 

const getFonts = () => Font.loadsAsyns({
    'Lucida-regular':require('./assets/fonts/LCALLIG.ttf'),
    'Lucida-italic':require('./assets/fonts/lucida calligraphy italic.ttf')
})


const Stack = createStackNavigator();
function App() {

    return (
       
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Gryffindor App" component={HomeScreen} />
                <Stack.Screen name="Camera" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//Home - Screen 1
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Avatar.Image size={300} source={require('./assets/logo.png')} />
            <Text style={{fontFamily: 'lucida calligraphy italic', fontSize: 20}}>Camera Magic was created to do amazing shots for your daily life</Text>
            <Button
                title="Next"
                onPress={() => navigation.navigate('Camera')}
            />
        </View>
    );
}

//Screen 2
function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
           
            <Button title="Go back" onPress={() => navigation.goBack()} />
          
        </View>
    );
}

export default App;
