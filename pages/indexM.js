/* ///////////  A B O U T    US   ////////// 
PAGE FOR EDITING-- FREE PAGE */

import React,{useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, requireNativeComponent } from 'react-native';
import { Avatar } from 'react-native-paper';
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

                    <Avatar.Image size={250} source={require('../assets/Walter.png')} />
                        <Text style={styles.text}>
                            Walter Guimarães Junior - 2020403
                        </Text>
                </View>
                
            </View> 
            
            <Image style={{width: 550, height: 150, borderRadius: 45 }}
                source={require('../assets/cct_logo.png')}
            />

            <View>
            <Text style={styles.quote}>
                            "None of us is as smart as all of us".(Ken Blanchard)
                        </Text>
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
        flex: 1,
        backgroundColor: "#740001",
        paddingTop: 15,
        paddingHorizontal: 20,
        
    },
    text: {
        color: "white",
        fontFamily:'Charlotte',
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: "center",
       
        
    },
    quote: {
        color: "#cb9232",
        fontFamily:'Charlotte',
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