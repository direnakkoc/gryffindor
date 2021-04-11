/**install expo-camera
 * install expo- permissions
 *  */ 
import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {

  const [hasPermission, setHasPermission] = useState(null);//declared a state for permission
  const [type, setType] = useState(Camera.Constants.Type.back);//declared a state for camera type
  const camRef = useRef(null);
//request permission function
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  //taking photo function
  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
    }
  }
//Added Camera UI
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 3 }}
        type={type}
        ref={camRef}>
      </Camera>
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
          <Icon name="camera" size={70} color="white" />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
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
            //switching Camera from Rear camera to Front camera and the other way around 
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Icon name="undo" size={30} color="black" />{/**Icon for rear camera and front camera */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
