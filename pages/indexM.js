/* ///////////  A B O U T    US   ////////// 
PAGE FOR EDITING-- FREE PAGE */

import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function indexM() {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 30}}>
                Our Team
            </Text>        
            <View style={{ flex: 1, flexDirection: 'row' }}>
            
                <View style={{ backgroundColor: '#b22222', flexGrow: 1, }}>
                    <Avatar.Image size={200}  source={require('../assets/Diren.png')}/>                    
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                        Diren Akkoc Demir - 2020266
                    </Text>
                </View>
                <View style={{ backgroundColor: '#b22222' }}>
                    <Avatar.Image size={200} source={require('../assets/Gabriel.png')} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                        Gabriel Climaco Brites Farina - 2020419
                    </Text> 
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#b22222', flexGrow: 1, }}>
                    <Avatar.Image size={200} source={require('../assets/Steffany.png')} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                        Steffany Aseret Roa Cañedo - 2020431
                    </Text> 
                </View>
                <View style={{ backgroundColor: '#b22222' }}>
                    <Avatar.Image size={200} source={require('../assets/Walter.png')} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                        Walter Guimarães Junior - 2020403
                    </Text> 
                </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a9a9a9"
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#D3A625',
        width: 120,
        marginTop: 20,
        padding: 5,
        alignContent: 'center',
        borderRadius: 25,

    },

    txt: {
        fontFamily: "Roboto",
        fontSize: 15,
    },

    txts: {
        fontFamily: "Pacifico",
        fontSize: 15,
        color: '#D3A625'
    },

    imgs: { height: 200, width: 200, justifyContent: 'center', }

}



);