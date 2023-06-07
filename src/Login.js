import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { supabase } from "../supabase/supabase";


const Login = () => {

  const [newUser, setNewUser] = useState('');
  const [newPass, setNewPass] = useState('');

  const logCheckUser = async () => {
    let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("user", newUser)
      .eq("pass", newPass);
     //  console.log(users[0].id);
    return users;
  };


  return (
    <View>
          <TouchableOpacity onPress={() => {
              if(newUser === '' || newPass === ''){
                alert('name and password need to be filled');
              } else {
                let userIdExit = 0
                let userRealId = 0

                logCheckUser()
                .then ((user) => {
                  userIdExit = user.length
                    if(userIdExit === 1){
                      userRealId = user[0].id
                    }
                })
                .then (() => {
                  if(userIdExit === 1){
                    alert ('OK mach')
                    console.log('Aqui',userRealId);
                    // aqui eu encaminho o id (userRealId) para a list 
                  } else {
                    alert('Wrong user or pass')
                  }
                })
              }
            }}
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
