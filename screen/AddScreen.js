import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';


const AddScreen = () => {
    
    const beerSize = 200;
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
   
      
        
        <Text style={styles.title}>Add Beer Screen</Text>
      
        <TouchableOpacity onPress={() =>  navigation.navigate('ListBeerScreen')} style={styles.close}>
            <Text style={styles.title}>X close</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    justifyContent: "center",
    height: "90%",
    marginVertical: 20,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 6,
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
