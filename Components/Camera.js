import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

/*installations needed:
expo install expo-camera
 expo install expo-permissions
 expo install expo-media-library
 expo install expo-image-picker
 npm install react-native-vector-icons*/

export default function App() {
  //THESE CONSTS ARE TO:

  //check if user has given permission to access hardware and sensitive information
  const [hasPermission, setHasPermission] = useState(null);
  //switch from back camera to front camera and vice versa
  const [type, setType] = useState(Camera.Constants.Type.back);
  //make expo camera 
  const camRef = useRef(null);
  //store photo just taken
  const [takenPhoto, setTakenPhoto] = useState(null);
  //activate or deactivate a modal component
  const [open, setOpen] = useState(false);
  const [albumModal, setAlbumModal] = useState(false);
  //set the name of the album the app creates. 
  const albumName = "Griffyndor";
  //store an image temporarily 
  const [image, setImage] = useState(null);
  //gets device's width and height so the photo is always on its dimension
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  /*Hook is taking action to have access to hardware and sensitive information
  Once it's granted, this set is saved on device settings for this app*/
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
  }

  /*function takePicture to take a picture
    got from https://www.youtube.com/watch?v=h8ukVeuzHEY */
  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();   //create an object and store it in data variable
      setTakenPhoto(data.uri);      //get uri value from object data and store it in 'takenPhoto'
      setOpen(true);    //Changing value of 'open' variable so the picture taken can be shown
    }
  }

  /*function savePicture to save the picture taken
   got from https://www.youtube.com/watch?v=tj58H9eAJv0,
   https://blog.expo.io/using-expos-medialibrary-api-to-create-an-album-and-save-a-photo-9000931c267b 
   and https://stackoverflow.com/questions/61132921/expo-medialibrary-createalbumasync-is-creating-multiple-album-with-same-name*/
  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(takenPhoto);
    const album = await MediaLibrary.getAlbumAsync(albumName);

    if (album) {
      //checking if album exists
      MediaLibrary.addAssetsToAlbumAsync([asset], album, false) //if it does, save photo to it
        .then(() => {
          alert("Photo succesfully saved!");
        })
        .catch((error) => {
          console.error("err", error);
        });
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

  /*function to access phone albums and pick a photo from it
  code from https://docs.expo.io/versions/latest/sdk/imagepicker */
  const pickImage = async () => {
    //specifying the media type and other properties required
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    //checking if the user really picked a photo. if true, variable 'image' receives it 
    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      setImage(null);
      setAlbumModal(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>

      {/*camera and next view got from https://www.youtube.com/watch?v=zvYc5Ar8ni8 */}
      <Camera style={{ flex: 2 }} type={type} ref={camRef}></Camera>

      {/*bottom bar for buttons*/}
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          backgroundColor: "black",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Icon
            name="square"
            size={50}
            color="white"
            onPress={() => setAlbumModal(true)}
          />
        </View>

        {/*button to take photo*/}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Icon name="camera" size={70} color="white" onPress={takePicture} />
        </View>

        {/*code to demonstrate switching camera icon*/}
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
          user can either discard or save it.
          got from https://www.youtube.com/watch?v=h8ukVeuzHEY */}
          {takenPhoto && (
            <Modal animationType="slide" transparent={false} visible={open}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    top: "5%",
                  }}
                >
                  <View
                    style={{
                      padding: "5%",
                      alignItems: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity //discard pic button
                      onPress={() => setOpen(false)}
                    >
                      <Icon name="window-close" size={60} color="red" />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      padding: "5%",
                      alignItems: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity //save pic button
                      onPress={savePicture}
                    >
                      <Icon name="upload" size={60} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>

                {/*here is what image is shown, defined by the value of takenPhoto
                windowWidth and windownHeight make sure the phoot adapts to devices with different sizes */}
                <Image
                  style={{
                    width: windowWidth,
                    height: windowHeight,
                    resizeMode: "contain",
                    alignSelf: "baseline",
                  }}
                  source={{ uri: takenPhoto }}
                />
              </View>
            </Modal>
          )}

          {/*if albumModal is true, modal component come up to show the photo selected by the user 
          piece of code from own authorship inspired by the previous modal*/}
          {albumModal && (
            <Modal
              animationType="slide"
              transparent={false}
              visible={albumModal}
              onShow={pickImage}
              onDismiss={() => setImage(null)}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", top: "15%" }}>
                  {image && (
                    <TouchableOpacity
                      style={{ paddingTop: "20%" }}
                      onPress={() => setAlbumModal(false)}
                    >
                      <Icon name="window-close" size={50} color="#FF0000" />
                    </TouchableOpacity>
                  )}
                </View>

                <Image
                  style={{
                    width: windowWidth,
                    height: windowHeight,
                    resizeMode: "contain",
                  }}
                  source={{ uri: image }}
                />
              </View>
            </Modal>
          )}
        </View>
      </View >
    </View >
  );
}