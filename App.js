import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Modal, Image, Text, Dimensions } from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

/*expo install expo-camera
 expo install expo-media-library
 expo install expo-image-picker*/

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camRef = useRef(null);
  const [takenPhoto, setTakenPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [albumModal, setAlbumModal] = useState(false);
  const albumName = "Griffyndor";
  const [image, setImage] = useState(null);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

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
  };

  /*function to access phone albums
  code from https://docs.expo.io/versions/latest/sdk/imagepicker */
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      setImage(null);
      setAlbumModal(false);
    }

  }

  return (
    < View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: 50,
          paddingBottom: 10,
          backgroundColor: "black",
          alignItems: "center"
        }}>
        <Icon name="bolt" size={30} color="white" margin={20} />
      </View>

      <Camera style={{ flex: 2 }} type={type} ref={camRef}></Camera>

      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          backgroundColor: "black",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, alignItems: "center", paddingBottom: "10%" }}>
          <Icon name="square" size={50} color="white" onPress={() => setAlbumModal(true)} />
        </View>

        <View style={{ flex: 1, alignItems: "center", paddingBottom: "10%" }}>
          <Icon name="camera" size={70} color="white" onPress={takePicture} />
        </View>
        <View style={{ flex: 1, alignItems: "center", paddingBottom: "10%" }}>

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
            /* function for switching camera from the Rear camera to the Front camera and the other way around*/
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
            <Modal animationType="slide" transparent={false} visible={open} >

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View style={{
                  flexDirection: "row", top: "20%",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <TouchableOpacity //discard pic button
                    style={{
                      padding: "10%",
                      alignItems: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => setOpen(false)}>
                    <Icon name="window-close" size={50} color="#FF0000" />
                  </TouchableOpacity>

                  <TouchableOpacity //save pic button
                    style={{
                      padding: "5%",
                      alignItems: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={savePicture}>
                    <Icon name="upload" size={50} color="#121212" />
                  </TouchableOpacity>
                </View>

                <Image
                  style={{ width: windowWidth, height: windowHeight, resizeMode: "contain" }}
                  source={{ uri: takenPhoto }}
                />
              </View>
            </Modal>
          )}

          {albumModal && (
            <Modal animationType="slide" transparent={false} visible={albumModal} onShow={pickImage} onDismiss={() => setImage(null)} >

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <View style={{ flexDirection: "row", top: "15%" }}>
                  {image && (<TouchableOpacity
                    style={{ paddingTop: "20%" }}
                    onPress={() => setAlbumModal(false)}>
                    <Icon name="window-close" size={50} color="#FF0000" />
                  </TouchableOpacity>)}
                </View>

                <Image
                  style={{ width: windowWidth, height: windowHeight, resizeMode: "contain" }}
                  source={{ uri: image }} />
              </View>
            </Modal>
          )}
        </View>
      </View>
    </View >
  );
};