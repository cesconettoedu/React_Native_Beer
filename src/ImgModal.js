import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ImgModal = ( {data, handleClose }) => {

  console.log(data);
  const beerSize = 200;



  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex:9}} onPress={handleClose}>

      <View style={styles.content}>
      
      <Text style={styles.title}>{data.title}</Text>
      
       <Image
            style={styles.imgOpen}  
            // source={{ uri: 'https://thumbs.dreamstime.com/z/bottles-famous-global-beer-brands-poznan-pol-mar-including-heineken-becks-bud-miller-corona-stella-artois-san-miguel-143170440.jpg'}}
            source={{ uri: data.imageUrl }}
            width={beerSize}
            height={beerSize}
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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.9)',
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
  actionButton: {
    zIndex: 99,
    backgroundColor: '#FFF',
    borderRadius: 6,
    margin: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.2)',

    shadowColor: 'rgba(0,0,0, 1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0,
    shadowRadius: 4,
  },
  actionText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imgOpen: {
    

  }


})