/* ///////////  A B O U T    US   ////////// 
PAGE FOR EDITING-- FREE PAGE */

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function indexM() {
    return (
        <View style={styles.container}>
            <Text>Our Team</Text>           
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: 'red', flexGrow: 1, }}>
                    <Avatar.Image size={200} source={require('../assets/logo.png')} />
                    <Text>Diren Akkoc Demir - 2020266</Text> 
                </View>
                <View style={{ backgroundColor: 'red' }}>
                    <Avatar.Image size={200} source={require('../assets/logo.png')} />
                    <Text>Gabriel Climaco Brites Farina - 2020419</Text> 
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: 'red', flexGrow: 1, }}>
                    <Avatar.Image size={200} source={require('../assets/logo.png')} />
                    <Text>Steffany Aseret Roa Cañedo - 2020431</Text> 
                </View>
                <View style={{ backgroundColor: 'red' }}>
                    <Avatar.Image size={200} source={require('../assets/logo.png')} />
                    <Text>Walter Guimarães Junior - 2020403</Text> 
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
        backgroundColor: "#740001"
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