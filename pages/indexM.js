/* ///////////  A B O U T    US   ////////// 
PAGE FOR EDITING-- FREE PAGE */

import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';



export default function indexM() {
    return (

        <ScrollView>
        <View style={styles.container}>

            <View style={{ paddingTop: 15, paddingHorizontal: 20 }}>

                <Avatar.Image size={250} source={require('../assets/Diren.png')} />
                <Text style={styles.text}>
                    Diren Akkoc Demir - 2020266
                            </Text>

                <Avatar.Image size={250} source={require('../assets/Gabriel.png')} />
                <Text style={styles.text}>
                    Gabriel Climaco Brites Farina - 2020419
                            </Text>

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
        </ScrollView>

    )

}

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        backgroundColor: "#740001",
        alignItems: "center",
        flexDirection: "column",

    },
    text: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: "center",
        fontFamily: "Charlotte"
    }
});