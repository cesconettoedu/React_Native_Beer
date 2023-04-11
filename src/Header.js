import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Header Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },


});
