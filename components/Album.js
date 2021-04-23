// You have to install --> npm install @react-navigation/native
//                     --> npm install @react-navigation/stack
//                     --> npm install react-native-paper
//
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';


export default function Album() {

const[fontsLoaded, setFontsLoaded] = useState(false);
    useEffect (()=>{
        if(!fontsLoaded){
            Font.loadAsync({
                Charlotte:require('../assets/fonts/Charlotte.otf'),
                
            });
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hola</Text>
           





        </View> 




    );
}
       
const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        backgroundColor: "#740001",
        alignItems: "center",
        flexDirection: "column"

    },
    text: {
        color: "white",
        fontFamily:'Charlotte',
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: "center",
        
    }
        });
    


