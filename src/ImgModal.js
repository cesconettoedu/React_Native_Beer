import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ImgModal = ( {data, handleClose }) => {

  const beerSize = 200;


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex:9}} onPress={handleClose}>

      <View style={styles.content}>
      
      <Text style={styles.title}>{data.title}</Text>
      
       <Image
            style={styles.imgOpen}  
            source={{ uri: data.imageUrl }}
            // width={beerSize}
            // height={beerSize}
            borderRadius={5}
            resizeMode="contain"
            alt="avatar url"
          />

      </View>
    </TouchableOpacity>
    </SafeAreaView>
  );
}


export default ImgModal;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: "center",
    height: "100%",
    marginVertical: 20,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 6,
    
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: 500,
  },
  
  imgOpen: {
    left: 17,
    width: '90%',
    height: '55%'


  }


})