import React from "react";
import { Pressable, TextInput, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

const MenuBottom = (orderBy) => {

const [open, setOpen] = useState(false)
const [nome, setNewnome] = useState('')

const navigation = useNavigation();
const sizeIcon = 45;


  return (

    
    <View style={styles.MenuBottom}>
      {open &&
        <View style={styles.searchContainer}>

          <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder=" BeerName"
              placeholderTextColor="#9a73ef"
              autoCapitalize='words'
              value={nome}
              onChangeText={setNewnome}
          />

          <Pressable
            style={styles.closeBtn}
            onPress={() =>setOpen(false)}
            >
            <Text style={styles.closeText}> X </Text>
          </Pressable>
      </View>
      }
      {!open &&
     <> 
     
      <TouchableOpacity onPress={() => orderBy.children.orderBy('title')} >
        <Image 
          source = {require('../assets/menuBottom/az.png')} 
          style = {{ width: sizeIcon, height: sizeIcon }}
          />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => orderBy.children.orderBy('star')} >
        <Image 
          source = {require('../assets/menuBottom/bests.png')} 
          style = {{ width: sizeIcon, height: sizeIcon }}
          />
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => setOpen(true)} >
        <Image 
          source = {require('../assets/menuBottom/search.png')} 
          style = {{ width: sizeIcon, height: sizeIcon }}
          />
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>  navigation.navigate('AddScreen')} >
        <Image 
          source = {require('../assets/menuBottom/add.png')} 
          style = {{ width: 65, height: 65 }}
          />
      </TouchableOpacity>
  </>
}

    </View>
  );
};

export default MenuBottom;


const styles = StyleSheet.create({
  MenuBottom: {
    flexDirection: "row",
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#3a0077',
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
  },
  input: {
    borderRadius: 5,
    borderColor: "#7a42f4",
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5
  },
  closeBtn: {
    width: "20%",
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 4,
    backgroundColor: "#FFF", 
  },
  closeText: {
    fontWeight: "bold",
    fontSize: 20
  },
});

