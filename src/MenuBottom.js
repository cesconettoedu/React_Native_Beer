import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


import Ionic from 'react-native-vector-icons/Ionicons';


export default MenuBottom = () => {




  return (
    <View style={styles.MenuBottom}>
     
      {/* <Ionic name="list" size={40}/> */}
      <TouchableOpacity 
        onPress={() => alert('This is a button will list beers alphabetical order!')}
      >
        <Image 
          source = {require('../assets/az.png')} 
          style = {{ width: 50, height: 50 }}
         
        />
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => alert('This is a button will list beers best rating!')}

      >
        <Image 
          source = {require('../assets/bests.png')} 
          style = {{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
     
      <Ionic name="add-circle-outline" size={60}  onPress={() => alert('This is a button to add beer!')}/>
           
      <Ionic name="camera-outline"size={40} onPress={() => alert('This will be to open Camera!')}/>
    </View>
  );
};


const styles = StyleSheet.create({
  MenuBottom: {
    flexDirection: "row",
    width: '100%',
    height: '8%',
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