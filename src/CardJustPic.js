import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";




export default function CardJustPic({ data }) {
 

  return (
    <View style={styles.imgCont}>
      <Image style={styles.imageThumbnail} source={{  uri: data.imageUrl }} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  imgCont: {
    flex: 2, 
    flexDirection: 'row', 
    padding: 1,
    marginLeft:3
  },
  imageThumbnail: {
    resizeMode:"contain",  
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 5,
    borderColor: '#7FB069',
    borderWidth: 1,
    width:110,
    height:140
  },
 
});
