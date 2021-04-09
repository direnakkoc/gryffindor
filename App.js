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
  const albumName = "Griffyndor";

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
   got from https://www.youtube.com/watch?v=tj58H9eAJv0,
   https://blog.expo.io/using-expos-medialibrary-api-to-create-an-album-and-save-a-photo-9000931c267b 
   and https://stackoverflow.com/questions/61132921/expo-medialibrary-createalbumasync-is-creating-multiple-album-with-same-name*/
  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(takenPhoto);
    const album = await MediaLibrary.getAlbumAsync(albumName);

    if (album) {    //checking if album exists
      MediaLibrary.addAssetsToAlbumAsync([asset], album, false) //if it does, save photo to it
        .then(() => {
          alert("Photo succesfully saved!");
        })
        .catch((error) => {
          console.error("err", error);
        })
    } else {
      MediaLibrary.createAlbumAsync(albumName, asset) //if not, create album and save pic to it
        .then(() => {
          alert("Photo succesfully saved!");
        })
        .catch((error) => {
          console.error("err", error);
        });
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 3 }} type={type} ref={camRef} ratio={Camera.getSupportedRatiosAsync()} />
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

          {/* code to show the photo just taken. 
          you can either discard or save it.
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
                  <TouchableOpacity //discard pic button
                    style={{ margin: 10 }}
                    onPress={() => setOpen(false)}
                  >
                    <Icon name="window-close" size={40} color="#FF0000" />
                  </TouchableOpacity>

                  <TouchableOpacity //save pic button
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
