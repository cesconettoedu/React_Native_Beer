import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from "react-native";

const Login = () => {

  const [newUser, setNewUser] = useState('');
  const [newPass, setNewPass] = useState('');

    const registerClick = () => {
       alert('go to Login input')
    }


  return (
    <View>
          <TouchableOpacity onPress={() => {
              if(newUser === ''){
                alert('enter a name');
              } else {
                storeData(newUser)
                }}
              }
              style={styles.inputUser}
            >
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder=" Your Name"
                placeholderTextColor="#4a4e69"
                autoCapitalize='words'
                maxLength={30}
                value={newUser}
                onChangeText={setNewUser}
                />
               <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder=" Password"
                placeholderTextColor="#4a4e69"
                secureTextEntry={true}
                maxLength={30}
                value={newPass}
                onChangeText={setNewPass}
                />
                <Image
                source={require("../assets/login.png")}
                style={{ width: 150, height: 55 }}
              />
          </TouchableOpacity>
        </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputUser: {   
    alignItems: 'center',
    justifyContent: "center",
  },
  input: {
    color: '#7FB069',
    width: '60%',
    borderRadius: 5,
    margin: 5,
    height: 40,
    borderColor: "#7FB069",
    borderWidth: 1,
    paddingLeft: 10
  },
});
