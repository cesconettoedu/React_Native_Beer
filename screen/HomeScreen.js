import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const HomeScreen = ({navigation}) => {


  const [showLogo, setShowLogo] = useState(true);
  const [newUser, setNewUser] = useState('');
  const [showEnter, setShowEnter] = useState(false);




  const press = () => {
    setShowLogo(false);
    setTimeout(() => {
      navigation.navigate('ListBeerScreen')
    },3000)
  }
 


  const isFocused = useIsFocused();


  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true)
    },1000)
   
  },[isFocused]);


 


  // store a user
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('user', value)
    } catch (e) {
      // saving error
    }
  }


  // look if user already exist
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
      // console.log('USEERRRR', value);
        setNewUser(value)
        setShowEnter(true)


      } else if (value === null) {
      //  console.log('SEM USEER', value);
        setShowEnter(false)
      }
    } catch(e) {
      console.log('error');
    }
  }


  //remover usuario
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('user')
    } catch(e) {
      // remove error
    }
    setNewUser('')
  }






  useEffect(() => {
    getData()
  },[newUser]);


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


        {!showEnter &&
          <View >
           
            <Text style={styles.first}>{"\n"}It's your first time ? {"\n"}Please typing you name.</Text>
           
            <TouchableOpacity onPress={() => {
              if(newUser === ''){
                alert('enter a name');
              } else {
                storeData(newUser); setShowEnter(true)
                }}
              }
              style={styles.inputUser}>


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
              <Image
                source={require("../assets/menuBottom/ok.png")}
                style={{ width: 65, height: 65 }}
              />
            </TouchableOpacity>


          </View>
        }
        {showEnter &&
          <View >
            <View style={styles.remove}>
              <Text style={styles.userName}>Welcome {newUser}</Text>
           
              <TouchableOpacity onPress={() => {removeValue()}} >
                <Text style={styles.removeX} >X</Text>
              </TouchableOpacity>
            </View>
           
            <TouchableOpacity
              style={[styles.enterContainer]}
              title="ENTER"
              onPress={press}
            >
              <Text style={styles.enter}>ENTER</Text>
            </TouchableOpacity>


          </View>
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
  first: {
    color: '#7FB069',
  },
  inputUser: {
    flexDirection: 'row',
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
  userName: {
    paddingTop: 30,
    textAlign: 'center',
    color: '#7FB069',
    fontSize: 30,
    fontWeight: 500,
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
