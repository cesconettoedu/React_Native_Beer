import React, { Fragment, useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";


import { launchCamera, launchImageLibrary } from "react-native-image-picker";


const Camera = () => {
  const [fileData, setFileData] = useState(null);
  const [fileUri, setFileUri] = useState(null);


  const renderFileData = () => {
    if (fileData) {
      return (
        <Image
          source={{ uri: `data:image/jpeg;base64,` + fileData }}
          style={{ width: 150, height: 150, marginHorizontal: 3 }}
        />
      );
    } else {
      return (
        <Image
          source={require("../assets/05mugs.png")}
          style={{ width: 150, height: 150, marginHorizontal: 3 }}
        />
      );
    }
  };


  const renderFileUri = () => {
    if (fileUri) {
      return (
        <Image
          source={{ uri: fileUri }}
          style={{ width: 150, height: 150, marginHorizontal: 3 }}
        />
      );
    } else {
      return (
        <Image
          source={require("../assets/05mugs.png")}
          style={{ width: 150, height: 150, marginHorizontal: 3 }}
        />
      );
    }
  };


  const launchNativeCamera = () => {
    let options = {
      includeBase64: true,
      StorageOption: {
        skipBackup: true,
        path: 'image',
      },
    };
    launchCamera(options, (response) => {
      console.log("Response===", response);
      if (response.didCancel) {
        console.log("user cancelled image picker");
      } else if (response.errorCode) {
        console.log("Image Picker Error:::", response.errorMessage);
      } else {
        const source = { uri: response.uri };
        console.log("response", JSON.stringify(response));
        setFileData(response.assets[0].base64);
        setFileUri(response.assets[0].uri);
      }
    });
  };


  return (
    <Fragment>
      <SafeAreaView>
        <View>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Pick from image camera
          </Text>
        </View>


        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 10,
              flexDirection: "row",
            }}
          >
            {renderFileData()}
            <Text>Base 64 String</Text>
          </View>


          <View
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 10,
              flexDirection: "row",
            }}
          >
            {renderFileUri()}
            <Text>Base 64 String</Text>
          </View>
        </View>


        <View>
          <TouchableHighlight
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#000",
              padding: 20,
            }}
            onPress={() => launchNativeCamera()}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Lauch Camera
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};


export default Camera;
