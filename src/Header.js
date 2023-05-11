import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Header(props) {

  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      
      <TouchableOpacity onPress={() =>  navigation.navigate('HomeScreen')} >  
        <Image 
            source = {require('../assets/eulogo.png')} 
            style = {{ width: 50, height: 50, marginRight: 30 }}
          />
      </TouchableOpacity>

      
      <Text style = {styles.appName}>Ed's Beer List</Text>

      <View style={styles.quantity}>
        <Text style={styles.numbers}> 
          <Text style={{ fontSize: 20, fontWeight: 700 }}>
            {props.quantity} 
          </Text>  
         {' '}Beers 
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#212427",
    
    borderRadius:10,
    borderWidth:2,
    borderColor: '#212427',
  },
  appName: { 
    marginRight: 30, 
    fontSize: 20, 
    fontWeight: 900, 
    color: '#7FB069', 
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  quantity: {
    backgroundColor: '#7FB069',
    borderRadius: 5,
  },
  numbers: {
    marginLeft: 5,
    marginRight: 5,
    
  }
});
