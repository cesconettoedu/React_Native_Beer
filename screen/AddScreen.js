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
  Modal
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../supabase/supabase";
import mug from "../assets/mugsStar/beerIconFull.png";
import * as ImagePicker from "expo-image-picker";
import CameraPhoto from '../src/CameraPhoto'

import mugFull from '../assets/mugsStar/beerIconFull.png'
import mugEmpty from '../assets/mugsStar/beerIconBlack.png'


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
 

  const ratio = 0.5;
  const navigation = useNavigation();

  const addNewBeer = async () => {
    const { data: Beer, error } = await supabase
      .from("Beer")
      .insert([
        { title: newTitle, imageUrl: newImageUrl, note: newNote, star: stars },
      ]);
    return Beer;
  };


  const updateNewBeer = async () => { 
    const { data: Beer, error } = await supabase
    .from('Beer')
    .update({ title: newTitle, imageUrl: newImageUrl, note: newNote, star: stars })
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
            <Image
              source={require("../assets/cameraBtn/camera.png")}
              style={{ width: 65, height: 65 }}
            />
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
            <Image
              source={require("../assets/cameraBtn/file.png")}
              style={{ width: 65, height: 65 }}
            />
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
            placeholderTextColor="#9a73ef"
            autoCapitalize='words'
            value={newTitle}
            onChangeText={setNewTitle}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Note"
            placeholderTextColor="#9a73ef"
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

        <View style={styles.viscosity}>
          <Text style={styles.light}>Light</Text>
          <Text style={styles.normal}>Normal</Text>
          <Text style={styles.bodied}>Full-bodied</Text>
          <Text style={styles.strong}>Strong</Text>
        </View>
       
        {!editB && 
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            addNewBeer();
            navigation.navigate("ListBeerScreen");
          }}
        >
        <Text style={styles.submitButtonText}> Press to Add Beer </Text> 
        </TouchableOpacity>
        }
        {editB && 
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            updateNewBeer();
            navigation.navigate("ListBeerScreen");
          }}
        >
        <Text style={styles.submitButtonText}> Press to Update Beer </Text> 
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
    backgroundColor: "black",
    bottom: 5,
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
    borderColor: "#7a42f4",
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
  },
  input: {
    borderRadius: 5,
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
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
  light: {
    borderColor: "#7a42f4",
    borderWidth: 1,
    borderRadius: 5,
    width: '23%',
    height: 40,
    textAlign: 'center',
    

  },
  bodied: {
    borderColor: "#7a42f4",
    borderWidth: 1,
    borderRadius: 5,
    width: '23%',
    height: 40,
    textAlign: 'center',
    

  },
  normal: {
    borderColor: "#7a42f4",
    borderWidth: 1,
    borderRadius: 5,
    width: '23%',
    height: 40,
    textAlign: 'center',
    

  },
  strong: {
    borderColor: "#7a42f4",
    borderWidth: 1,
    borderRadius: 5,
    width: '23%',
    height: 40,
    textAlign: 'center',
    

  },
  
  submitButton: {
    borderRadius: 5,
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "#FFF",
    textAlign: 'center',
  },
});
