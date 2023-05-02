import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useIsFocused } from '@react-navigation/native';

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
    setTimeout(() => {
      setShowLogo(true)
    },1000)
    
  },[isFocused]);

  return (
    <View style={styles.container}>

      {showLogo &&

      <View >
        <Text
          style={styles.title}
        > Ed's Beer List</Text>
        
        <Image 
          style={styles.myLogo}
          source={require('../assets/eulogo.png')}
        />
      
        <TouchableOpacity 
          style={[styles.enterContainer]}
          title="ENTER"
          onPress={press}
        >
          <Text style={styles.enter}>ENTER</Text>
        </TouchableOpacity>
      
      </View>
      }
      {!showLogo &&
      <Image 
        style={styles.cheers}
        source={require('../assets/cheers.gif')}
      />
      }


    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    color: '#69e9f5',
    fontSize: 40,
    fontWeight: 600
  },
  enterContainer: {
    opacity: 0.2,
    top: 40
    
  },
  enter: {
    alignSelf: 'center',
    color: '#69e9f5',
    fontSize: 40,
    fontWeight: 600,
    borderRadius:10,
    backgroundColor: '#8fcbbc',
    paddingRight: 10,
    paddingLeft: 10
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