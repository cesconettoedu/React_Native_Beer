import React from "react";
import { TextInput, SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';


const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex:9}}></TouchableOpacity>

      <View style={styles.content}>

        <View style={styles.line}>
          <TextInput
              style={styles.input1}
              underlineColorAndroid="transparent"
              placeholder=" BeerName"
              placeholderTextColor="#9a73ef"
              autoCapitalize='words'
              // value={newTitle}
              // onChangeText={setNewTitle}
            />
            <TouchableOpacity activeOpacity={0.9} style={styles.actionButton1} >
            <Image
              source={require('../assets/menuBottom/search.png')}
              style={{ width: 60, height: 60  }}
            />
          </TouchableOpacity>

        </View>

      

      </View>

    </SafeAreaView>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: "center",
    height: "15%",
    marginVertical: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 6,
  },
  line: {
    flexDirection: 'row',
    backgroundColor: '#69e9f5',
    borderRadius: 45,
    margin:5
  },
  actionButton1: {
    backgroundColor: '#69e9f5',
    borderRadius: 45,
    margin: 2,
    padding: 2,
  },
  input1: {
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 5,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    paddingLeft: 10,
    width: '74%'
  }


})