import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "react-native-flat-button";

export default function Login({ navigation }) {
  //store an image temporarily
  const [image, setImage] = useState(null);

   /*Hook is taking action to have access to hardware and sensitive information
  Once it's granted, this set is saved on device settings for this app*/
  useEffect(() => {
    
    /* request to access camera */
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
        }
      }
    })();
  }, []);

    /*function to access phone albums and pick a photo from it
  code from https://docs.expo.io/versions/latest/sdk/imagepicker */
  const pickImage = async () => {
    //specifying the media type and other properties required
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 2,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    //The code below will show the logo in the top of our app
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ height: 350, width: 250 }}
      />

      {/*In the code below you can see the code on the button that will open the Screen About us*/}
      <Button
        type="warn"
        onPress={() => navigation.navigate("About us")} //method onPress that will open the Screen About us on the navigator
        containerStyle={styles.buttonContainer}
      >
        <Text style={styles.txt}>About us</Text>
      </Button>
      
      {/*In the code below you can see the code on the button that will open the Camera*/}
      <Button
        type="warn"
        onPress={() => navigation.navigate("camera")} //method onPress that will open the camera on the navigator
        containerStyle={styles.buttonContainer}
      >
        <Text style={styles.txt}>Camera</Text>
      </Button>
      
      {/*In the code below you can see the code on the button that will redirect you to the Album*/}
      <Button
        type="warn"
        onPress={pickImage} //method onPress that will open the Album on the navigator.
        containerStyle={styles.buttonContainer}
      >
        <Text style={styles.txt}>Album</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#740001",
  },

  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5,
    borderRadius: 25,
    marginTop: 5,
    backgroundColor: "#D3A625",
    alignItems: "center",
  },

  txt: {
    fontSize: 20,
    color: "#000000",
  },

  imgs: { height: 200, width: 200, justifyContent: "center" },
});
