import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import AddScreen from "./AddScreen";

const HomeScreen = ({navigation}) => {

  const [showLogo, setShowLogo] = useState(true);

  const press = () => {
    setShowLogo(false);
    setTimeout(() => {
      navigation.navigate('ListBeerScreen')
    },3000)
  }
  

  const isFocused = useIsFocused();

  useEffect(() => {
    setShowLogo(true)
  },[isFocused]);

  return (
    <View style={styles.container}>

      {/* <Text
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
        title="ENTER"
        onPress={press}
      >
        <Text style={[styles.enter, { display: showLogo ? 'flex' : 'none' }]}>ENTER</Text>
      </TouchableOpacity> */}

      <AddScreen/>

    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // backgroundColor: '#8fcbbc'
  //   backgroundColor: 'black'
  // },
  // title: {
  //   color: '#69e9f5',
  //   fontSize: 40,
  //   fontWeight: 600
  // },
  // enterContainer: {
  //   opacity: 0.2,
    
  // },
  // enter: {
  //   alignSelf: 'center',
  //   color: '#69e9f5',
  //   fontSize: 40,
  //   fontWeight: 600,
  //   borderRadius:10,
  //   backgroundColor: '#8fcbbc',
  //   paddingRight: 10,
  //   paddingLeft: 10
  // },
  // myLogo: {
  //   width: 320, 
  //   height: 350
  // },
  // cheers: {
  //   // display: 'none',
  //   width: 320, 
  //   height: 250
  // }
})