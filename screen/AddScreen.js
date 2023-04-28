import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { supabase } from "../supabase/supabase";
import mug from "../assets/mugsStar/beerIconFull.png"
import * as ImagePicker from 'expo-image-picker';



const AddScreen = () => {

  const [newTitle, setNewTitle] = useState('');
  const [newNote, setNewNote] = useState('');
  const [stars, setStars] = useState(0);
  const [newImageUrl, setNewImageUrl] = useState(null);
  
  const ratio = 0.5
  const navigation = useNavigation();
  // const ima = 'https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1520x800.webp'

  const addNewBeer = async () => {
    const { data: Beer, error } = await supabase
    .from('Beer')
    .insert([
       { title: newTitle, imageUrl: newImageUrl, note: newNote, star: stars },
     
    ])   
    return Beer
  }

 
  //to get image from device
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setNewImageUrl(result.assets[0].uri);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
   
                
                    {/* <TouchableOpacity>
                      <Text style={styles.closeX}  onPress={() =>  navigation.navigate('ListBeerScreen')}>X</Text>
                    </TouchableOpacity> */}

                   <Pressable style={styles.closeBtn}  onPress={() =>  navigation.navigate('ListBeerScreen')}>
                     <Text style={styles.closeText}> X </Text>
                   </Pressable>



                    <View style={styles.imagePrev}>
                      {newImageUrl && <Image source={{ uri: newImageUrl }} style={{ width: 200, height: 200, borderRadius: 2 }} />}
                    </View>

                    <View style={styles.btnImage}>
                      <TouchableOpacity onPress={() => alert('This is a button will open CAMERA')} >
                        <Image 
                          source = {require('../assets/menuBottom/add.png')} 
                          style = {{ width: 65, height: 65 }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={pickImage} >
                        <Image 
                          source = {require('../assets/menuBottom/add.png')} 
                          style = {{ width: 65, height: 65 }}
                        />
                      </TouchableOpacity>
                    </View>


                    <KeyboardAvoidingView style={styles.keyboardAvoid} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                      <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = " BeerName"
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        value={newTitle}
                        onChangeText={setNewTitle}/>
                      
                      <TextInput style = {styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = " Note"
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        value={newNote}
                        onChangeText={setNewNote}/>
                    </KeyboardAvoidingView>

                      <View style={styles.mugs}>
                        <TouchableOpacity onPress = {() => setStars(1)} >
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug1"                                                    
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => setStars(2)}>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug2"
                          />
                        </TouchableOpacity>
                         <TouchableOpacity onPress = {() => setStars(3)}>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug3"
                          />
                        </TouchableOpacity>
                         <TouchableOpacity onPress = {() => setStars(4)}>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug4"
                          />
                        </TouchableOpacity>
                         <TouchableOpacity onPress = {() => setStars(5)}>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug5"
                          />
                        </TouchableOpacity>
                      </View>

                      
                      <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {() => {addNewBeer(); navigation.navigate('ListBeerScreen')} }>
                        <Text style = {styles.submitButtonText}> Press to Add Beer </Text>
                      </TouchableOpacity>

        

      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {   
    flex:1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  content: {
    paddingTop: 20,
  },

  closeBtn: {
    left: 285,
    width: '20%',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  closeText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  imagePrev: {
    left: 44,
    height: 210,
    width: 210,
    borderColor: '#7a42f4',
    borderWidth: 5,
    margin: 15,
    borderRadius: 7,
  },
  btnImage: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    borderRadius: 5,
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  mugs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  submitButton: {
    borderRadius: 5,
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    color: 'white'
  },
   closeX: {
    textAlign: "right",
    right: 10,
    color: '#7a42f4',
    fontSize: 30,
   backgroundColor: 'orange',
    fontWeight: 500,
  },
});
