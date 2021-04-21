/* ///////////  A B O U T    US   ////////// 
PAGE FOR EDITING-- FREE PAGE */

import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, requireNativeComponent } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';
import * as Font from 'expo-font';

export default function indexM() {
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
             <ScrollView>
            <View style={styles.row} >
            
                <View style={{ paddingTop: 15, paddingHorizontal: 20, width: '50%' }} >
                    <Avatar.Image size={250} source={require('../assets/Diren.png')} />
                        <Text style={styles.text}>
                            Diren Akkoc Demir - 2020266
                        </Text>
                        <Divider style={{ marginTop: 20, marginBottom: 20  }} />
                    <Avatar.Image size={250} source={require('../assets/Gabriel.png')} />
                        <Text style={styles.text}>
                            Gabriel Climaco Brites Farina - 2020419
                        </Text>
                </View>
               

                <View style={{ paddingTop: 15, paddingHorizontal: 20, width: '50%' }} >
                    <Avatar.Image size={250} source={require('../assets/Steffany.png')} />
                        <Text style={styles.text}>
                            Steffany Aseret Roa Cañedo - 2020431
                        </Text>
                        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                    <Avatar.Image size={250} source={require('../assets/Walter.png')} />
                        <Text style={styles.text}>
                            Walter Guimarães Junior - 2020403
                        </Text>
                </View>
                
            </View> 
            
            </ScrollView>
        </View>
        

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display:'flex',
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#740001",
        paddingTop: 15,
        paddingHorizontal: 20,
        
    },
    text: {
        color: "white",
        //fontFamily:'Charlotte',
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: "center",
       
        
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },



});