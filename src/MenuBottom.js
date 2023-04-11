import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import Ionic from 'react-native-vector-icons/Ionicons';

export default MenuBottom = () => {
  return (
    <View style={styles.MenuBottom}>
      
      <Ionic name="list" />
      <Ionic name="add-circle-outline" />
      <Ionic name="add-circle-outline" />
    </View>
  );
};

const styles = StyleSheet.create({
  MenuBottom: {
    flexDirection: "row",
    width: '100%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});
