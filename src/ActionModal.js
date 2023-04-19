import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function ActionModal( { handleClose, handleEdit, handleDelete }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex:9}} onPress={handleClose}></TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.9} style={styles.actionButton} onPress={handleEdit}>
          <Text style={styles.actionText}>EDIT</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={styles.actionButton} onPress={handleDelete}>
          <Text style={[styles.actionText, styles.deleteText]}>DELETE</Text>
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
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    
  },
  actionButton: {
    zIndex: 99,
    backgroundColor: '#FFF',
    borderRadius: 6,
    margin: 2,
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