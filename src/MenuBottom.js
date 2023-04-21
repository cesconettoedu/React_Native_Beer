import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

const MenuBottom = () => {

const sizeIcon = 45;


  return (
    <View style={styles.MenuBottom}>
     
      {/* <Ionic name="list" size={40}/> */}
      <TouchableOpacity onPress={() => alert('This is a button will list beers alphabetical order!')} >
        <Image 
          source = {require('../assets/menuBottom/az.png')} 
          style = {{ width: sizeIcon, height: sizeIcon }}
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => alert('This is a button will list beers best rating!')} >
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

      <TouchableOpacity onPress={() => alert('This is a button will add beer!')} >
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
    backgroundColor: 'purple',
    borderRadius: 10,
  },
});


// MenuBottom: {
//     position: 'absolute',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: "flex-end",
//     bottom: 5,
//     left: 20,
//     right: 20,
//     elevation: 0,
//     backgroundColor: 'yellow',
//     borderRadius: 15,
//     height: 60,
//   },
//   shadow: {
//     shadowColor: '#7F5DF0',
//     shadowOffset: {}
//   }