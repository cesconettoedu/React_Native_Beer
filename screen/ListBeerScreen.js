import React, { useState, useEffect } from "react";
import {StyleSheet, FlatList, TouchableOpacity, Image, View , Modal} from 'react-native';
import Header from '../src/Header';
import CardBeer from '../src/CardBeer';
import CardJustPic from '../src/CardJustPic';
import MenuBottom from '../src/MenuBottom';
import ImgModal from "../src/ImgModal";
import { supabase } from "../supabase/supabase";
import Search from "../src/Search";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoader from "../src/AppLoader";

import { useFocusEffect } from '@react-navigation/native';


const ListBeerScreen = ({route}) => {
  const [visibImgleModal, setVisibleImgModal] = useState(false);
  const [single, setSingle] = useState({})
  const [beer, setBeer] = useState()
  const [order, setOrder] = useState('title')
  const [asc, setAsc] = useState(true)

  const [searchModal, setSearchModal] = useState (false)
  const [searchList, setSearchList] = useState ('')

  const [fullListBtn, setFullListBtn] = useState(false)
  
  const [visuSquare, setVisuSquare] = useState(false)
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)


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

  const showSquare = (y) => {
     setVisuSquare(y)
  }

  
  //get all beers from supabase
  const getItems = async () => {
    let { data: Beer, error } = await supabase
    .from('Beer')
    .select('*')
    .eq('id_user', `${route.params.id}`)
    .order(order ,  { ascending: asc })
    .order('title')    
    
    
    //use to get Url 
      for (var k in Beer) {        
        Beer[k].url = getFromStorage(Beer[k].imageUrl)
      }
      
      setBeer(Beer)
      setCount(Beer.length);
      return Beer
  }


  //to get from Storage Supabase
  const getFromStorage = (path) => {  
    const { data } = supabase
      .storage
      .from('beerImagesStorage')
      .getPublicUrl(path)
      return data.publicUrl
  }


  const handleSearch = (typing) => {
    if(typing !== null) {
      setSearchList(typing)
    }    
  }


  const closeSearchAfterPass = (actA) => {
    setSearchModal(actA)
    setFullListBtn(true)
  }
   
  //get search Beer from supabase
  const getSearchBeer = async () => {
    let { data: Beer, error } = await supabase
    .from('Beer')
    .select("*")
    .eq('id_user', `${route.params.id}`)
    .ilike('title', `%${searchList}%`)
    setBeer(Beer)
    setCount(Beer.length);
      return Beer
  }


  //after search when you click on 'full list', bring back all beers
  const fullCloseSearch = () => {
    setSearchList('')
    getItems()
    setFullListBtn(false)
  }


  // when screen in focus run the Loading Beer one time
  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => { 
        setLoading(false);         
      }, 4500);
      setLoading(true)
    }, [])

  );


  useEffect(() => {
    if(searchList){
      getSearchBeer()
    }else{ 
      getItems()  
    }
    
  },[beer, order, searchList, visuSquare])

  return (
    <>
    <View style={styles.container}>
     
      <Header
        quantity={count}
        onPress={() => navigation.navigate('HomeScreen')}
      />
     
     {!visuSquare &&
      <FlatList
      data={beer}
      renderItem={ ({ item }) => (
        <View>
          <TouchableOpacity
              key={item.id}
              onPress={() => {setVisibleImgModal(true); setSingle(item)}}
              >
              <CardBeer data={item}/>
          </TouchableOpacity>      
        </View>
        )}
       
        />
      }
       {visuSquare &&
       <FlatList
       data={beer}
       renderItem={ ({ item }) => (
         <View>
           <TouchableOpacity
               key={item.id}
               onPress={() => {setVisibleImgModal(true); setSingle(item)}}
               >
               <CardJustPic data={item}/>
           </TouchableOpacity>      
         </View>
         )}
         numColumns={3}
         keyExtractor={(item, index) => index}
         />
           
       }
     
      <Modal
          visible={visibImgleModal}
          transparent={true}
          onRequestClose={() => setVisibleImgModal(false)}
          animationType="slide"
      >
        <ImgModal
          title={single.title}
          url={single.url}
          handleClose={() => setVisibleImgModal(false)}
        />
      </Modal>
     
      {fullListBtn &&
        <TouchableOpacity  onPress={() => fullCloseSearch(false)}>
          <Image
            source = {require('../assets/cameraBtn/Full2.png')}
            style={styles.fullList}
            />
        </TouchableOpacity>
      }


      <MenuBottom>
        {{orderBy: orderBy, openSearch:openSearch, showSquare:showSquare, userIdLogado: route.params.id}}
      </MenuBottom>


      <Modal
          visible={searchModal}
          transparent={true}
          onRequestClose={() => setSearchModal(false)}
          animationType="slide"
      >
        <Search>
          {{handleSearch: handleSearch, closeSearchAfterPass: closeSearchAfterPass}}
        </Search>
      </Modal>    


    </View>
    
    {loading ? <AppLoader/> : null}

    </>
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
  fullList:{
    left: 110,
    width: 130,
    height: 55,
    marginBottom:5,
  }
});
