import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function CardBeer({ data }) {
  const beerSize = 130
  

  return (
    
     

      <View style={styles.box}>
        <View style={styles.inner}>

          <Text style={styles.title}>{data.title}</Text>

          <Image 
            source={{ uri: data.imageUrl }}
            width={beerSize}
            height={beerSize}
            borderRadius={8}
            resizeMode= 'contain'
            alt="avatar url"
          />

          <Text style={styles.note} numberOfLines={2}>{data.note}</Text>

          <Image 
            source={require("../assets/05mugs.png" )}
            alt="mug url"  
            aspectRatio= {1.2}
            resizeMode= 'contain' 
          />

        </View>
      </View>   
  );
}

const styles = StyleSheet.create({
 
  box: {
    width: '50%',
    padding: 3,
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 1 
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10
  },
  note: {
    fontSize: 12,
    marginTop: 20
  },


});
