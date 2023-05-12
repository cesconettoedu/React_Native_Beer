import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Modal,
  ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../supabase/supabase";
import * as ImagePicker from "expo-image-picker";
import CameraPhoto from '../src/CameraPhoto'
import Slider from '@react-native-community/slider';

import mugFull from '../assets/mugsStar/beerIconFull.png'
import mugEmpty from '../assets/mugsStar/beerIconBlack.png'
import bgrange from '../assets/strong/bg.png'


const AddScreen = ({route}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [stars, setStars] = useState(0);
  const [newImageUrl, setNewImageUrl] = useState("https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg");
  const [visibleModal, setVisibleModal] = useState(false);
  const [editB, setEditB] = useState(false);
  const [idUpdate, setIdUpdate] = useState(0);

  const [mug1, setMug1] = useState(mugEmpty);
  const [mug2, setMug2] = useState(mugEmpty);
  const [mug3, setMug3] = useState(mugEmpty);
  const [mug4, setMug4] = useState(mugEmpty);
  const [mug5, setMug5] = useState(mugEmpty);
 
  const [newViscosity, setNewViscosity] = useState(1)

  const ratio = 0.5;
  const navigation = useNavigation();

  const addNewBeer = async () => {
    const { data: Beer, error } = await supabase
      .from("Beer")
      .insert([
        { title: newTitle, imageUrl: newImageUrl, note: newNote, star: stars, viscosity: newViscosity },
      ]);
    return Beer;
  };


  const updateNewBeer = async () => { 
    const { data: Beer, error } = await supabase
    .from('Beer')
    .update({ title: newTitle, imageUrl: newImageUrl, note: newNote, star: stars, viscosity: newViscosity })
    .eq('id', idUpdate)
    return Beer;
  };


  //to get image from device
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [12, 16],
      quality: 1,
    });
    if (!result.canceled) {
      setNewImageUrl(result.assets[0].uri);
    }
  };


  const editBeer = () => {
    if(route.params !== undefined) {
      setEditB(true);
      setIdUpdate(route.params.paramKey.id)
      setNewImageUrl(route.params.paramKey.imageUrl)
      setNewTitle(route.params.paramKey.title)
      setNewNote(route.params.paramKey.note)
      setStars(route.params.paramKey.star)
      mugClick(route.params.paramKey.star)
      setNewViscosity(route.params.paramKey.viscosity)
    }
  }


  
  const getFromCamera = (image) => {
    setNewImageUrl(image)
  }

  const closeCamera = (close) => {
    setVisibleModal(false)
  }

  const mugClick = (x) => {  
      switch (x) {
        case 1:
          if (mug2 === mugFull) {
            setMug1(mugFull);
            setMug2(mugEmpty);
            setMug3(mugEmpty);
            setMug4(mugEmpty);
            setMug5(mugEmpty);
          } else if (mug1 === mugEmpty) {
            setMug1(mugFull);
          } else {
            setStar(0);
            setMug1(mugEmpty);
            setMug2(mugEmpty);
            setMug3(mugEmpty);
            setMug4(mugEmpty);
            setMug5(mugEmpty);
          }
          break;
        case 2:
          if (mug2 === mugEmpty) {
            setMug1(mugFull);
            setMug2(mugFull);
          } else {
            setMug3(mugEmpty);
            setMug4(mugEmpty);
            setMug5(mugEmpty);
          }
          break;
        case 3:
          if (mug3 === mugEmpty) {
            setMug1(mugFull);
            setMug2(mugFull);
            setMug3(mugFull);
          } else {
            setMug4(mugEmpty);
            setMug5(mugEmpty);
          }
          break;
        case 4:
          if (mug4 === mugEmpty) {
            setMug1(mugFull);
            setMug2(mugFull);
            setMug3(mugFull);
            setMug4(mugFull);
          } else {
            setMug5(mugEmpty);
          }
          break;
        case 5:
          if (mug5 === mugEmpty) {
            setMug1(mugFull);
            setMug2(mugFull);
            setMug3(mugFull);
            setMug4(mugFull);
            setMug5(mugFull);
          }
          break;
        default:
      }
  };



  useEffect(() => {
    editBeer() 
  },[route])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Pressable
          style={styles.closeBtn}
          onPress={() => navigation.navigate("ListBeerScreen")}
        >
          <Text style={styles.closeText}> X </Text>
        </Pressable>

        <View style={styles.imagePrev}>
          {newImageUrl && (
            <Image
              source={{ uri: newImageUrl }}
              style={styles.imageOnPrev}
            />
          )}
          
        </View>

        <View style={styles.btnImage}>
          <TouchableOpacity
            onPress={() => setVisibleModal(true)}
          >
            {editB && 
            <Image
              source={require("../assets/cameraBtn/camera1.png")}
              style={{ width: 65, height: 65 }}
            />
            }
            {!editB && 
              <Image
                source={require("../assets/cameraBtn/camera2.png")}
                 style={{ width: 65, height: 65 }}
              />
            }
          </TouchableOpacity>
          <Modal
            visible={visibleModal}
            transparent={true}
            onRequestClose={() => setVisibleModal(false)}
            animationType="slide"
          >
            <CameraPhoto>
              {{getFromCamera: getFromCamera, closeCamera:closeCamera}} 
            </CameraPhoto>          
          </Modal>

          <TouchableOpacity onPress={pickImage}>
          {editB &&  
            <Image
              source={require("../assets/cameraBtn/file1.png")}
              style={{ width: 65, height: 65 }}
            />
          }
          {!editB &&  
            <Image
              source={require("../assets/cameraBtn/file2.png")}
              style={{ width: 65, height: 65 }}
            />
          }
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" BeerName"
            placeholderTextColor="#4a4e69"
            autoCapitalize='words'
            maxLength={30}
            value={newTitle}
            onChangeText={setNewTitle}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Note"
            placeholderTextColor="#4a4e69"
            autoCapitalize='sentences'
            value={newNote}
            onChangeText={setNewNote}
          />
        </KeyboardAvoidingView>


        <View style={styles.mugs}>
          <TouchableOpacity onPress={() => {setStars(1); mugClick(1)}}>
            <Image
              source={mug1}
              aspectRatio={ratio}
              resizeMode="contain"
              alt="mug1"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setStars(2); mugClick(2)}}>
            <Image
              source={mug2}
              aspectRatio={ratio}
              resizeMode="contain"
              alt="mug2"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setStars(3); mugClick(3)}}>
            <Image
              source={mug3}
              aspectRatio={ratio}
              resizeMode="contain"
              alt="mug3"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setStars(4); mugClick(4)}}>
            <Image
              source={mug4}
              aspectRatio={ratio}
              resizeMode="contain"
              alt="mug4"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setStars(5); mugClick(5)}}>
            <Image
              source={mug5}
              aspectRatio={ratio}
              resizeMode="contain"
              alt="mug5"
            />
          </TouchableOpacity>
        </View>

        <View >
          <Text style={{textAlign: 'center'}}>   Light       Normal   Full-bodied   Strong</Text>
        </View> 
        
        <View style={styles.viscosity}>
          <ImageBackground source={bgrange} resizeMode="cover" style={styles.bgViscosity}>
          <Slider
            style={styles.range}
            minimumValue={1}
            maximumValue={4}
            step={1}
            thumbImage={mugFull}
            minimumTrackTintColor="rgba(0,0,0,0)"
            maximumTrackTintColor="rgba(0,0,0,0)"
            value={newViscosity}
            onValueChange={setNewViscosity}
            />       
            </ImageBackground>
        </View>
       
        {!editB && 
        <TouchableOpacity
          style={styles.submitButtonA}
          onPress={() => {
            addNewBeer();
            navigation.navigate("ListBeerScreen");
          }}
        >
          <Image
              source={require("../assets/cameraBtn/addNewBeer2.png")}
              style={{ width: 200, height: 65, resizeMode: 'contain' }}
            />
        </TouchableOpacity>
        }
        {editB && 
        <TouchableOpacity
          style={styles.submitButtonU}
          onPress={() => {
            updateNewBeer();
            navigation.navigate("ListBeerScreen");
          }}
        >
        <Image
              source={require("../assets/cameraBtn/updateBeer2.png")}
              style={{ width: 200, height: 65, resizeMode: 'contain' }}
            /> 
        </TouchableOpacity>
        }

      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECE4B7",
  },
  content: {
    paddingTop: 20,
  },

  closeBtn: {
    left: 300,
    width: "20%",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    backgroundColor: "#212427",
    top: 10,
  },
  closeText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  imagePrev: {
    left: 65,
    width: 160,
    height: 210,
    borderColor: "#4a4e69",
    borderWidth: 5,
    margin: 15,
    borderRadius: 7,
  },
  imageOnPrev: {
    width: 150, 
    height: 200, 
    borderRadius: 2,
    resizeMode:"contain"
  },
  btnImage: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15
  },
  input: {
    borderRadius: 5,
    margin: 5,
    height: 40,
    borderColor: "#4a4e69",
    borderWidth: 1,
    paddingLeft: 10
  },
  mugs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },

  viscosity: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  bgViscosity: {
    borderWidth: 1,
    borderRadius: 5,
  },
  range: {
    width: 250, 
    height: 40,
  },
  submitButtonA: {
    borderRadius: 5,
    padding: 10,
    margin: 15,
    height: 50,
    justifyContent: "center",
    alignItems: 'center'
  },
  submitButtonU: {
    borderRadius: 5,
    padding: 10,
    margin: 15,
    height: 50,
    justifyContent: "center",
    alignItems: 'center'
  },

});
