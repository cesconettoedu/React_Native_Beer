import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Image 
          source = {require('../assets/eulogo.png')} 
          style = {{ width: 50, height: 50, marginRight: 30 }}
        />
      
      <Text style = {{ marginRight: 30, fontSize: 20, fontWeight: 900 }}>Ed's Beer List</Text>

      <View>
        <Text> {props.quantity} Beers</Text>
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
    backgroundColor: '#eee',
  },


});
