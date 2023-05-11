import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraPhoto = (getFromCamera) => {
  
  
const [hasCameraPermission, setHasCameraPermission] = useState(null);
const [camera, setCamera] = useState(null);
const [image, setImage] = useState(null);
const [type, setType] = useState(Camera.Constants.Type.back);


const takePicture = async () => {
  if(camera){
      const data = await camera.takePictureAsync(null)
      setImage(data.uri);
      getFromCamera.children.getFromCamera(data.uri)
  }
}
if (hasCameraPermission === false) {
  return <Text>No access to camera</Text>;
}

const goBack = () => {
  getFromCamera.children.closeCamera(false)
}


useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);
  

  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,1)',}}>
      
      <Pressable
          style={styles.closeBtn}
          onPress={() => goBack()}
        >
        <Text style={styles.closeText}> X </Text>
      </Pressable>


      <View style={styles.cameraContainer}>
          <Text style={styles.live}> ● Live</Text>
          <Camera 
                ref={ref => setCamera(ref)}
                style={styles.fixedRatio} 
                type={type}
          />
      </View>
      
        {image && <Image source={{uri: image}} style={styles.photoPrev}/>}
      

      <View style={styles.camButton}>
        <TouchableOpacity                
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
            );
          }}>
          <Image
            source={require("../assets/cameraBtn/FlipCamera.png")}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => takePicture()} >
          <Image
            source={require("../assets/cameraBtn/TakePic.png")}
            style={{ width: 80, height: 80 }}
          />
        </TouchableOpacity>

          {!image &&
            <TouchableOpacity onPress={() => alert('take a photo first')}>
              <Image
                source={require("../assets/cameraBtn/uncheck.png")}
                style={{ width: 45, height: 45 }}
              />
            </TouchableOpacity>
          }
          {image && 
            <TouchableOpacity  onPress={() => goBack()} >
              <Image
                source={require("../assets/cameraBtn/check.png")}
                style={{ width: 45, height: 45 }}
              />
            </TouchableOpacity>
          }

      </View>
    </View>

  );
    
};
export default CameraPhoto;

const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center", 
  },
  live: {
    color: 'red',
    zIndex: 99,
    top: 20
  },
  photoPrev : {
    flex:1, 
    left: 62,
    margin: 10,
    borderRadius: 4,
    borderColor: "#7FB069",
    borderWidth: 2,
    resizeMode: "contain",
    width: '60%'
  },
  fixedRatio:{
      flex: 1,
      aspectRatio: 0.8,   
  },
  closeBtn: {
    left: 320,
    width: "8%",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    backgroundColor: "#FFF",
    margin: 10
  },
  closeText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  camButton: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-evenly",
    alignItems: 'flex-end',
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10
  }
})
