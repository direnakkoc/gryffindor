import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "react-native-flat-button";

export default function Login({ navigation }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
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
  const pickImage = async () => {
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
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ height: 350, width: 250 }}
      />

      <Button
        type="warn"
        onPress={() => navigation.navigate("About us")}
        containerStyle={styles.buttonContainer}
      >
        <Text style={styles.txt}>About us</Text>
      </Button>

      <Button
        type="warn"
        onPress={() => navigation.navigate("camera")}
        containerStyle={styles.buttonContainer}
      >
        <Text style={styles.txt}>Camera</Text>
      </Button>

      <Button
        type="warn"
        onPress={pickImage}
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
