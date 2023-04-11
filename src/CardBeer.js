import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function CardBeer({ data }) {
  const beerSize = "60%"
  

  return (
    <View style={styles.container}>
     
      <View style={styles.box}>
        <View style={styles.inner}>

          <Text>Alexander Keiths</Text>

          <Image 
            source={{ uri: "https://cdn.shopify.com/s/files/1/0052/0853/9197/products/full_e48f6bab-351d-4b03-9dbc-a3f19c13c761_580x.jpg?v=1543789208" }}
            width={beerSize}
            height={beerSize}
            borderRadius={8}
            alt="avatar url"
          />

          <Text>ok, i can drink all day</Text>

          <Image 
            source={require("../assets/05mugs.png" )}
            alt="mug url"  
            aspectRatio= {1.5} 
            resizeMode= 'contain' 
          />

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
