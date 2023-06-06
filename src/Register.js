import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { supabase } from "../supabase/supabase";

const Register = () => {
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [userExist, setUserExist] = useState("");



  const checkUser = async () => {
    let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("user", newUser);
    setUserExist(users.length);
    return users;
  };

  const createUser = async () => {
    const { data: users, error } = await supabase
      .from("users")
      .insert([{ user: newUser, pass: newPass }]);
    return users;
  };



  return (
    <View style={styles.inputUser}>

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Your Name"
        placeholderTextColor="#4a4e69"
        autoCapitalize="words"
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

      <TouchableOpacity
        onPress={() => {
          if (newUser === "") {
            alert("enter a name");
          } else {
            checkUser();
            console.log(userExist);
            if (userExist === 0) {
              createUser();
            } else {
              alert("user name already exist");
            }
          }
        }}
      >

        <Image
          source={require("../assets/register.png")}
          style={{ width: 150, height: 55 }}
        />

      </TouchableOpacity>
    
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputUser: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: "#7FB069",
    width: "60%",
    borderRadius: 5,
    margin: 5,
    height: 40,
    borderColor: "#7FB069",
    borderWidth: 1,
    paddingLeft: 10,
  },
});
