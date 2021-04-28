// It page is just for following the structure of the Album button
//this code is already on the button in the index
//
//You have to install --> npm install @react-navigation/native
//                     --> npm install @react-navigation/stack
//                     --> npm install react-native-paper
//
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

export default function Album() {
  const [image, setImage] = useState(null);//creation state

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          //in case we want an alert we can write next code
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
//variable save album
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,//permission to edit 
      aspect: [4, 3],//aspect album
      quality: 1,
    });

    console.log(result);//print the result 

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
//return the album 
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
