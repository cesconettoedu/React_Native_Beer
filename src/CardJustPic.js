import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";




export default function CardJustPic({ data }) {
 

  return (
    <View style={styles.box}>
      <View style={styles.inner}>
        <View style={styles.imgBeer}>
              <Image
                source={{ uri: data.imageUrl }}
                width={80}
                height={110}
                borderRadius={8}
                resizeMode="contain"
                alt="avatar url"
              />
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 3,
  },
 
});
