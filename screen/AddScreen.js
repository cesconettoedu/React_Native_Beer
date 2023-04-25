import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const AddScreen = () => {

  const beerSize = 200;


  return (
   
      <View style={styles.content}>
      
         <Text style={styles.title}>Add Beer Screen</Text>
      
     
      </View>
   
  );
}


export default AddScreen;


const styles = StyleSheet.create({
 
  content: {
    justifyContent: "center",
    height: "97%",
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
  
 

})