import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Register from "../src/Register";
import Login from "../src/Login";




const HomeScreen = ({navigation}) => {


  const [showLogo, setShowLogo] = useState(true);
  const [showBtns, setShowBtns] = useState(true);
  const [regInp, setRegInp] = useState(false);
  const [logInp, setLogInp] = useState(false);
  const [newUser, setNewUser] = useState('');
  const [newPass, setNewPass] = useState('');


  const regBtnPress = () => {
   setShowBtns(false);
   setRegInp(true);
  }

  const logBtnPress = () => {
    setShowBtns(false);
    setLogInp(true);
   }


  return (
    <View style={styles.container}>

      {showLogo &&

      <View >
        <Text
          style={styles.title}
        > Ed's Beer List</Text>
       
        <Image
          style={styles.myLogo}
          source={require('../assets/eulogo.png')}
        />



      {showBtns &&
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity onPress={regBtnPress}>
          <Text style={styles.regLogbtn}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={logBtnPress}>
            <Text style={styles.regLogbtn}>Login</Text>
          </TouchableOpacity>
        </View>
      } 
      {regInp &&
        <Register/>
      }
      {logInp &&
        <Login/>
      }
     

      </View>
      }
      {!showLogo &&
      <Image
        style={styles.cheers}
        source={require('../assets/cheers.gif')}
      />
      }

    </View>
  )
}


export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    color: '#7FB069',
    fontSize: 40,
    fontWeight: 600
  },
  regLogbtnCont: {
    opacity: 0.2,
    top: 40  
  },
  regLogbtn: {
    alignSelf: 'center',
    color: '#69e9f5',
    fontSize: 30,
    fontWeight: 600,
    borderRadius:10,
    backgroundColor: '#8fcbbc',
    paddingRight: 10,
    paddingLeft: 10
  },
 
  
  remove: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  removeX: {
    color: '#69e9f5',
    fontSize: 20,
    fontWeight: 600,
    borderRadius:10,
    backgroundColor: 'red',
    paddingRight: 10,
    paddingLeft: 10
  },
  enterContainer: {
    opacity: 0.2,
    top: 40  
  },
  enter: {
    alignSelf: 'center',
    color: '#69e9f5',
    fontSize: 40,
    fontWeight: 600,
    borderRadius:10,
    backgroundColor: '#8fcbbc',
    paddingRight: 10,
    paddingLeft: 10
  },
  myLogo: {
    width: 320,
    height: 350
  },
  cheers: {
    width: 320,
    height: 250
  }
})
