import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';




export default function Login({ navigation }) {
    return (

/* Title  */
        <View style={styles.container}>
            <Text style={styles.txts}>Welcome to Gryffindor Camera</Text>
                    

            <Image source={{ uri: "https://picsum.photos/200/200" }} style={styles.imgs} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About us')} >

                <Text style={styles.txt}>About US</Text></TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('camera')} >

                <Text style={styles.txt}>Take a Photo</Text> </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutUS')} >
                <Text style={styles.txt} >Instagram</Text> </TouchableOpacity>
        </View>

    );

};

const styles = StyleSheet.create({
//CONTAINER    
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#740001"
    },
//BUTTONS   
    button: {
        alignItems: 'center',
        backgroundColor: '#D3A625',
        width: 120,
        marginTop: 20,
        padding: 5,
        alignContent: 'center',
        borderRadius: 25,

    },
//Text for Buttons
    txt: {
        fontFamily: "Roboto",
        fontSize: 15,
    },
//Text for Title "Welcome to Gryffindor"
    txts: {
        fontFamily: "Pacifico",
        fontSize: 15,
        color: '#D3A625'
    },
//properties images
    imgs: { height: 200, width: 200, justifyContent: 'center', }

}



);

