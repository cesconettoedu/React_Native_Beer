import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuBottom = (orderBy, showSquare) => {
const [ azVisible, setAzVisible] = useState(false)
const [ listVisible, setListVisible] = useState(false)

const navigation = useNavigation();
const sizeIcon = 45;


const list = (a) => {
  orderBy.children.showSquare(false)
  setListVisible(a)
}
const square = (b) => {
  orderBy.children.showSquare(true)
  setListVisible(b)
}



const az = (x) => {
  orderBy.children.orderBy('title')
  setAzVisible(x)
}
const bests = (y) => {
  orderBy.children.orderBy('star')
  setAzVisible(y)
}


  return (

    
    <View style={styles.MenuBottom}>

      {listVisible &&
        <TouchableOpacity onPress={() => list(false)} >
          <Image 
            source = {require('../assets/menuBottom/visuList.png')} 
            style = {{ width: sizeIcon, height: sizeIcon }}
            />
        </TouchableOpacity>
      }  
      {!listVisible &&
        <TouchableOpacity onPress={() => square(true)} >
          <Image 
            source = {require('../assets/menuBottom/visuSquare.png')} 
            style = {{ width: sizeIcon, height: sizeIcon }}
            />
        </TouchableOpacity>
      }




      {azVisible &&
        <TouchableOpacity onPress={() => az(false)} >
          <Image 
            source = {require('../assets/menuBottom/az2.png')} 
            style = {{ width: sizeIcon, height: sizeIcon }}
            />
        </TouchableOpacity>
      }  
      {!azVisible &&
        <TouchableOpacity onPress={() => bests(true)} >
          <Image 
            source = {require('../assets/menuBottom/bests2.png')} 
            style = {{ width: sizeIcon, height: sizeIcon }}
            />
        </TouchableOpacity>
      }

      <TouchableOpacity onPress={() => orderBy.children.openSearch()} >
        <Image 
          source = {require('../assets/menuBottom/search2.png')} 
          style = {{ width: sizeIcon, height: sizeIcon }}
          />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AddScreen', { userId: orderBy.children.userIdLogado, addItem: true })} >
        <Image 
          source = {require('../assets/menuBottom/add2.png')} 
          style = {{ width: 65, height: 65 }}
          />
      </TouchableOpacity>
  
    </View>
  );
};

export default MenuBottom;


const styles = StyleSheet.create({
  MenuBottom: {
    flexDirection: "row",
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: '#3a0077',
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    width: '60%',
    borderRadius: 5,
    borderColor: "#7a42f4",
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#69e9f5'
  },
  closeBtn: {
    width: "11%",
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 4,
    backgroundColor: "#FFF", 
  },
  closeText: {
    fontWeight: "bold",
    fontSize: 20
  },
});

