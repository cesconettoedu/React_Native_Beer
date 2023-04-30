import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export function ConfModal( {title, handleClose, handleCancel, handleYes }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex:9}} onPress={handleClose}></TouchableOpacity>

      <View style={styles.content}>
      
        <Text style={styles.title}>Do you want to delete {title}?</Text>
      
        <View style={styles.yesNo}>
          <TouchableOpacity activeOpacity={0.9} style={styles.actionButton} onPress={handleYes}>
            <Image
              source={require("../assets/menuBottom/yes.png")}
              style={{ width: 60, height: 60 }}
            />
          </TouchableOpacity>
          
          <TouchableOpacity activeOpacity={0.9} style={styles.actionButton} onPress={handleCancel}>
            <Image
              source={require("../assets/menuBottom/no.png")}
              style={{ width: 60, height: 60 }}
            />
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: "center",
    height: "35%",
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 6,
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: 500,
  },
  yesNo: {
    flexDirection: 'row',
    justifyContent: "center",
    justifyContent: "space-evenly",
  },

  actionButton: {
    backgroundColor: '#69e9f5',
    borderRadius: 45,
    margin: 2,
    padding: 2,
  },

  actionText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deleteText: {
    color: '#FF0000'
  }


})