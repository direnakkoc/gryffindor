/* ///////////  A B O U T    US   ////////// 
PAGE FOR EDITING-- FREE PAGE */

import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Avatar } from 'react-native-paper';



export default function indexM() {
    return (

        <View style={styles.container}>

            <View style={styles.container}>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flexGrow: 1, paddingTop: 60, paddingHorizontal: 20 }}>
                            <Avatar.Image size={200} source={require('../assets/Diren.png')} />
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Diren Akkoc Demir - 2020266
                            </Text>
                            
                        </View>
                        <View style={{ paddingTop: 60, paddingHorizontal: 20 }}>
                            <Avatar.Image size={200} source={require('../assets/Gabriel.png')} />
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Gabriel Climaco Brites Farina - 2020419
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flexGrow: 1, paddingTop: 30, paddingHorizontal: 20 }}>
                            <Avatar.Image size={200} source={require('../assets/Steffany.png')} />
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Steffany Aseret Roa Cañedo - 2020431
                    </Text>
                        </View>

                        <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
                            <Avatar.Image size={200} source={require('../assets/Walter.png')} />
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Walter Guimarães Junior - 2020403
                    </Text>

                        </View>

                    </View>
               
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#740001",
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#161a1d",
        
    }
});