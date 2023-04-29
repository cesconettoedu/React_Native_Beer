import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function ConfModal( {title, handleClose, handleCancel, handleYes }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex:9}} onPress={handleClose}></TouchableOpacity>

      <View style={styles.content}>
      
      <Text style={styles.title}>Do you want to delete {title}?</Text>
      
        <TouchableOpacity activeOpacity={0.9} style={styles.actionButton} onPress={handleCancel}>
          <Text style={styles.actionText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={styles.actionButton} onPress={handleYes}>
          <Text style={[styles.actionText, styles.deleteText]}>Yes</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(0,0,0,0.9)',
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
  actionButton: {
    zIndex: 99,
    backgroundColor: '#FFF',
    borderRadius: 6,
    margin: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.2)',

    shadowColor: 'rgba(0,0,0, 1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0,
    shadowRadius: 4,
  },
  actionText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deleteText: {
    color: '#FF0000'
  }


})