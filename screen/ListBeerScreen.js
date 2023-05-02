import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, TouchableOpacity,Image, View , Modal, Text} from 'react-native';
import Header from '../src/Header';
import CardBeer from '../src/CardBeer';
import MenuBottom from '../src/MenuBottom';
import ImgModal from "../src/ImgModal";
import { supabase } from "../supabase/supabase";
import Search from "../src/Search";


const ListBeerScreen = ({props}) => {
const [visibImgleModal, setVisibleImgModal] = useState(false);
const [single, setSingle] = useState({})
const [beer, setBeer] = useState()
const [order, setOrder] = useState('title')
const [asc, setAsc] = useState(true)

const [searchModal, setSearchModal] = useState (false)

  const openSearch = (x) => {
    setSearchModal(true)
  }

  const orderBy = (typeOrder) => {
      setOrder(typeOrder)
      setAsc(false)
      if(typeOrder === 'title'){
        setAsc(true)
      }
  }


  //get all beers from supabase
  const getItems = async () => {
      let { data: Beer, error } = await supabase
      .from('Beer')
      .select('*')
      .order(order ,  { ascending: asc })
      .order('title')
      setBeer(Beer)
      return Beer
  }

  //use to find number of beers or lenght
  let count = 0;
  for (var k in beer) if (beer.hasOwnProperty(k)) ++count;


  useEffect(() => {
    getItems() 
  },[beer, order])


  return (

    <View style={styles.container}>
      
      <Header 
        quantity={count}
        onPress={() => navigation.navigate('HomeScreen')}
      />
      
      <FlatList 
        data={beer}
        renderItem={ ({ item }) => (
          <TouchableOpacity 
            key={item.id} 
            onPress={() => {setVisibleImgModal(true); setSingle(item)}}
          >
          <CardBeer data={item}/>
          
          </TouchableOpacity>      
        )}
        
      />

      <Modal
          visible={visibImgleModal}
          transparent={true}
          onRequestClose={() => setVisibleImgModal(false)}
          animationType="slide"
      >
        <ImgModal
          data={single}
          handleClose={() => setVisibleImgModal(false)}
        />
      </Modal>

      
    
      <MenuBottom>
        {{orderBy: orderBy, openSearch:openSearch}}

      </MenuBottom>


      <Modal
          visible={searchModal}
          transparent={true}
          onRequestClose={() => setSearchModal(false)}
          animationType="slide"
      >
        <Search
          handleClose={() => setSearchModal(false)}
        />
      </Modal>    

    </View>
  );
}

export default ListBeerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#212427",
    marginTop: "13%"
  },


});
