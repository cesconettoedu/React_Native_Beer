import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/cheers.gif')}
        style={{width: 320, height: 250}}
      />

      <Text>Home Screen</Text>
      <Button
        title="ENTER"
        onPress={() => navigation.navigate('ListBeerScreen')}
      />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'

  }
})