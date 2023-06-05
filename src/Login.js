import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Login = () => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.loginCont]}
        title="Login"
        // onPress={press}
      >
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    loginCont: {
        opacity: 0.2,
        top: 40  
      },
      login: {
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
