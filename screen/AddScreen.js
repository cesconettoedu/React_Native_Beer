import React, {useState} from "react";
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { supabase } from "../supabase/supabase";
import mug from "../assets/mugsStar/beerIconFull.png"



const AddScreen = () => {

  const [newTitle, setNewTitle] = useState('');
  const [newNote, setNewNote] = useState('');
  const [stars, setStars] = useState(0);
  
  const ratio = 0.5
  const navigation = useNavigation();


  const addNewBeer = async () => {
    console.log("AAAAAAAAAAAAAAAAAAAAA",stars);
    const { data: Beer, error } = await supabase
    .from('Beer')
    .insert([
       { title: newTitle, note: newNote, star: stars },
     
    ])   
    return Beer
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
   
                <View style = {styles.container}>
                    <TouchableOpacity onPress={() =>  navigation.navigate('ListBeerScreen')} style={styles.close}>
                      <Text style={styles.title}>close Add Beer Screen X</Text>
                    </TouchableOpacity>

                    <View style={styles.imagePrev}>
                      
                    </View>

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


                      <View style={styles.mugs}>
                        <TouchableOpacity>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug1"
                            onPress = {() => setStars(1)}                            
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug2"
                            onPress = {() => setStars(2)}
                          />
                        </TouchableOpacity>
                         <TouchableOpacity>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug3"
                            onPress = {() => setStars(3)}
                          />
                        </TouchableOpacity>
                         <TouchableOpacity>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug4"
                            onPress = {() => setStars(4)}
                          />
                        </TouchableOpacity>
                         <TouchableOpacity>
                          <Image  
                            source={mug}
                            aspectRatio={ratio}
                            resizeMode="contain"
                            alt="mug5"
                            onPress = {() => setStars(5)}
                          />
                        </TouchableOpacity>
                      </View>

                      
                      <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {() => {addNewBeer(); navigation.navigate('ListBeerScreen')} }>
                        <Text style = {styles.submitButtonText}> Press to Add Beer </Text>
                      </TouchableOpacity>
                  </View>
        
        
      
       

      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,    
  },
  imagePrev: {
    height: '40%',
    borderColor: '#7a42f4',
    borderWidth: 1,
    margin: 15,
    borderRadius: 5,

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
  close: {
    backgroundColor: 'orange'
  },
   title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 500,
  },
});
