import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Register = () => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.registerCont]}
        title="register"
        // onPress={press}
      >
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
    registerCont: {
        opacity: 0.2,
        top: 40  
      },
      register: {
        alignSelf: 'center',
        color: '#69e9f5',
        fontSize: 30,
        fontWeight: 600,
        borderRadius:10,
        backgroundColor: '#8fcbbc',
        paddingRight: 10,
        paddingLeft: 10
      },
});
