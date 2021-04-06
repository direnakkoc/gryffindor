import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export default function Login({ navigation }) {
    return (


        <View style={styles.container}>
            <Image source={require('../assets/logo.png') } style={{height:350,width:250}} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About us')} >

                <Text style={styles.txt}>About us</Text></TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('camera')} >

                <Text style={styles.txt}>Camera</Text></TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About us')} >
                <Text style={styles.txt} >Instagram</Text></TouchableOpacity>
        </View>

    );

};

const styles = StyleSheet.create({
   
    container: {
        display:'flex',
        flex: 1,
        justifyContent: "flex-start",
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

    imgs: { height: 200, width: 200, justifyContent: 'center'}
});