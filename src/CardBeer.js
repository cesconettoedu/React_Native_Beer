import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function CardBeer({ data }) {
  return (
    <View style={styles.container}>
     
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>box 1</Text>
          {/* <Image 
            source = {{uri:data.imageUrl}}
            style = {{ width: 100, height: 100 }} 
            borderRadius={8}  
            resizeMode= 'contain'
          /> */}
          {/* <Text>{data.note}</Text> */}
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }

});
