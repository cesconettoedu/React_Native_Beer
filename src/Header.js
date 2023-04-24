import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Image 
          source = {require('../assets/eulogo.png')} 
          style = {{ width: 50, height: 50, marginRight: 30 }}
        />
      
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
    backgroundColor: '#808080',
    borderRadius:10,
    borderWidth:2,
    borderColor: '#212427',
  },
  appName: { 
    marginRight: 30, 
    fontSize: 20, 
    fontWeight: 900, 
    color: '#69e9f5', 
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  quantity: {
    backgroundColor: '#ff9a3c',
    borderRadius: 5,
  },
  numbers: {
    marginLeft: 5,
    marginRight: 5,
    
  }
});
