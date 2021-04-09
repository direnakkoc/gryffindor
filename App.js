import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Modal, Image } from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

/*expo install expo-camera
 expo install expo-media-library*/

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camRef = useRef(null);
  const [takenPhoto, setTakenPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    {
      /* request to access camera */
    }
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    {
      /* request access media library */
    }
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === "granted");
    })();
  }, []);

  //Validating any permission
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Access denied</Text>;
    //I changed the text here so it can be a message for either permission
  }

  /*function takePicture to take a picture
    got from https://www.youtube.com/watch?v=h8ukVeuzHEY */
  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setTakenPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  /*function savePicture to save the picture taken
   got from https://www.youtube.com/watch?v=tj58H9eAJv0 */
  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(takenPhoto)
      .then(() => {
        alert("Photo succesfully saved!");
      })
      .catch((error) => {
        console.log("err", error);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 3 }} type={type} ref={camRef}></Camera>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "black",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Icon name="square" size={50} color="white" />
        </View>
        <View style={{ flex: 1, alignItems: "center", padding: 50 }}>
          <Icon name="camera" size={70} color="white" onPress={takePicture} />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>

          {/*code to demonstrate switching camera icon*/}
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 50,
              backgroundColor: "white",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            /* function for switching camera from front to back and back to front*/
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Icon name="undo" size={30} color="black" />
          </TouchableOpacity>

          {/* code to show the photo just taken and save it;
          got from https://www.youtube.com/watch?v=h8ukVeuzHEY */}
          {takenPhoto && (
            <Modal animationType="slide" transparent={false} visible={open}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 20,
                }}
              >
                <View style={{ margin: 10, flexDirection: "row" }}>
                  <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={() => setOpen(false)}
                  >
                    <Icon name="window-close" size={40} color="#FF0000" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={savePicture}
                  >
                    <Icon name="upload" size={40} color="#121212" />
                  </TouchableOpacity>
                </View>

                <Image
                  style={{ width: "100 %", height: "100%" }}
                  source={{ uri: takenPhoto }}
                />
              </View>
            </Modal>
          )}
        </View>
      </View>
    </View>
  );
}
