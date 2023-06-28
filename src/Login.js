import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { supabase } from "../supabase/supabase";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = (props) => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [showLogo, setShowLogo] = useState(false);

  const logCheckUser = async () => {
    let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("user", newUser)
      .eq("pass", newPass);
    //  console.log(users[0].id);
    return users;
  };




  const storeUserPass = async (value) => {
    try {
      await AsyncStorage.setItem('userName', newUser);
      await AsyncStorage.setItem('userPass', newPass);
    } catch (err) {
      alert(err)
    }
  };

  const loadUserPass = async () => {

  try {
    const value1 = await AsyncStorage.getItem('userName');
    const value2 = await AsyncStorage.getItem('userPass');
    if (value1 !== null && value2 !== null) {
      setNewUser(value1);
      setNewPass(value2);
    }
  } catch (err) {
    alert(err)
  }
};




  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 1000);
  }, [isFocused]);


  useEffect(() => {
    loadUserPass();
  }, []);


 
  return (
    <View>
      {!showLogo && (
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
              if (newUser === "" || newPass === "") {
                alert("name and password need to be filled");
              } else {
                let userIdExit = 0;
                let userRealId = 0;
                let userName = "";

                logCheckUser()
                  .then((user) => {
                    userIdExit = user.length;
                    if (userIdExit === 1) {
                      userRealId = user[0].id;
                      userName = user[0].user;
                    }
                  })
                  .then(() => {
                    if (userIdExit === 1) {
                      setShowLogo(true);
                      setTimeout(() => {
                        navigation.navigate("ListBeerScreen", {id: userRealId,});
                      }, 2700);
                    } else {
                      alert("Wrong user or pass");
                    }
                  });
              }
              storeUserPass(newUser);
            }}
          >
            <Image
              style={styles.confirm}
              source={require("../assets/login.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.returnToLogin()}>
            <Image
              style={styles.return}
              //source={require("../assets/menuBottom/return.png")}
              source={require("../assets/cameraBtn/cancel.png")}
            />
          </TouchableOpacity>
        </View>
      )
    }
      {showLogo && (
        <View>
          <Image style={styles.cheers} source={require("../assets/cheers.gif")} />
          <Text style={styles.cheersName}>Cheers {newUser} !!!</Text>
        </View>
      )
      }
    </View>
  );
};

export default Login;

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
  confirm: {
    marginTop: 20,
    width: 150,
    height: 55,
  },
  return: {
    width: 55,
    height: 55,
    marginTop: 20,
  },
  cheers: {
    width: 320,
    height: 250,
  },
  cheersName: {
    textAlign: 'center',
    color: '#7FB069',
    fontSize: 23,
    fontWeight: 600
  }
});
