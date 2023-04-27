import React, {useState} from "react";
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { supabase } from "../supabase/supabase";



const AddScreen = () => {

  [newTitle, setNewTitle] = useState('');
  [newNote, setNewNote] = useState('');
  
  const beerSize = 200;
  const navigation = useNavigation();


  const addNewBeer = async () => {
    const { data: Beer, error } = await supabase
    .from('Beer')
    .insert([
       { title: newTitle, note: newNote, star:1 },
     
    ])   
    return Beer
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
   
                <View style = {styles.container}>
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

                      <View>
                        {/* Mugs */}
                      </View>

                      
                      <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {() => {addNewBeer(); navigation.navigate('ListBeerScreen')} }>
                        <Text style = {styles.submitButtonText}> Press to Add Beer </Text>
                      </TouchableOpacity>
                  </View>
        
        
      
        <TouchableOpacity onPress={() =>  navigation.navigate('ListBeerScreen')} style={styles.close}>
            <Text style={styles.title}>X close Add Beer Screen</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
  },
  submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
  },
  submitButtonText:{
      color: 'white'
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: 500,
  },
  close: {
    backgroundColor: 'orange'
  }
});
