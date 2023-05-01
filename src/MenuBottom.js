import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuBottom = (orderBy) => {

const navigation = useNavigation();
const sizeIcon = 45;


  return (
    <View style={styles.MenuBottom}>
     
      {/* <Ionic name="list" size={40}/> */}
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
     
      <TouchableOpacity onPress={() => alert('This is a button will search for beer!')} >
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
});

