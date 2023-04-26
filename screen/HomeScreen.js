import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useIsFocused } from '@react-navigation/native'

const HomeScreen = ({navigation}) => {

  const [showLogo, setShowLogo] = useState(true);
  const [btn, setBtn] = useState ('ENTER');
  const isFocused = useIsFocused();

  const press = () => {
    setShowLogo(false);
    setBtn('WELCOME')
    setTimeout(() => {
      navigation.navigate('ListBeerScreen')
    },3000)
  }
  
  useEffect(() => {
    isFocused
  },[isFocused]);

  return (
    <View style={styles.container}>

      <Text
        style={[styles.title, { display: showLogo ? 'flex' : 'none' }]}
      > Ed's Beer List</Text>
      
      <Image 
        style={[styles.myLogo, { display: showLogo ? 'flex' : 'none' }]}
        // style={styles.myLogo}
        source={require('../assets/eulogo.png')}
      />
      
      <Image 
        style={[styles.cheers, { display: showLogo ? 'none' : 'flex' }]}
      //  style={styles.cheers}
        source={require('../assets/cheers.gif')}
      />

      <TouchableOpacity 
        style={[styles.enterContainer]}
        title={btn}
        onPress={press}
      >
        <Text style={[styles.enter, { display: showLogo ? 'flex' : 'none' }]}>ENTER</Text>
      </TouchableOpacity>


    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#8fcbbc'
    backgroundColor: 'black'
  },
  title: {
    color: '#69e9f5',
    fontSize: 40,
    fontWeight: 600
  },
  enterContainer: {

  },
  enter: {
    color: '#69e9f5',
    fontSize: 40,
    fontWeight: 600,
    borderRadius:10,
    backgroundColor: '#8fcbbc'
  },
  myLogo: {
    width: 320, 
    height: 350
  },
  cheers: {
    // display: 'none',
    width: 320, 
    height: 250
  }
})