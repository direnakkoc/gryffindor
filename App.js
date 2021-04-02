// You have to install --> npm install @react-navigation/native
//                     --> npm install @react-navigation/stack
//                     --> npm install react-native-paper

import * as React from 'react';
//import * as Font from 'expo-font';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar } from 'react-native-paper';


//import Icon from "react-native-vector-icons/FontAwesome";

//const getFonts = () => Font.loadsAsyns({
//    'Lucida-regular':require('./assets/fonts/LCALLIG.ttf'),
//    'Lucida-italic':require('./assets/fonts/lucida calligraphy italic.ttf')
//})


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Avatar.Image size={300} source={require('./assets/logo.png')} />
            <Text>Camera Magic was created to do amazing shots for your daily life</Text>
            <Button
                title="Next"
                onPress={() => navigation.navigate('Camera')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
           
            <Button title="Go back" onPress={() => navigation.goBack()} />
          
        </View>
    );
}

const Stack = createStackNavigator();
//const [fontsLoaded, setFontsLoaded] = useState(false);

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

export default App;
