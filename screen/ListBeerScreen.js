import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity,Image, View , Modal} from 'react-native';
import Header from '../src/Header';
import CardBeer from '../src/CardBeer';
import MenuBottom from '../src/MenuBottom';
import ImgModal from "../src/ImgModal";

const ListBeerScreen = ({props}) => {
const [visibImgleModal, setVisibleImgModal] = useState(false);
const [single, setSingle] = useState({})

  const data = [
    {
    id: 1,
    title: "Alexander Keiths",
    imageUrl: "https://cdn.shopify.com/s/files/1/0052/0853/9197/products/full_e48f6bab-351d-4b03-9dbc-a3f19c13c761_580x.jpg?v=1543789208",
    note: "Ok, i can drink all day",
    star: 4,
    mugs: "../assets/05mugs.png"
    },
     {
    id: 2,
    title: "Creemore Lager",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg01AmibJ3TKmfiVXr_ao9VSBvydAVVwlwQ&usqp=CAU",
    note: "Good, ",
    star: 4,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 3,
    title: "Blue Moon",
    imageUrl: "https://www.bluemoonbrewingcompany.com/sites/bluemoon/files/styles/beers/public/beers/2018-06/BlueMoon-BelgianWhite.png?itok=AonO8W6_",
    note: "Great beer ",
    star: 4,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 4,
    title: "Brahma",
    imageUrl: "https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/PRODUTOS_10.png.webp?itok=3K1kJjA0",
    note: "Can drink, but not a lot",
    star: 2,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 5,
    title: "Budweiser",
    imageUrl: "https://aem.lcbo.com/content/dam/lcbo/products/9/0/2/6/902619.jpg.thumb.1280.1280.jpg",
    note: "Light beer, cheap to drink all day",
    star: 2,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 6,
    title: "Coors light",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXV4cm80sdH8KK6rqABqxud2bm70o9UOLmg&usqp=CAU",
    note: "Like water, just if not have other",
    star: 1,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 7,
    title: "Corona",
    imageUrl: "https://aem.lcbo.com/content/dam/lcbo/products/0/2/2/6/022683.jpg.thumb.1280.1280.jpg",
    note: "Good , light , can drink all day",
    star: 4,
    mugs: "../assets/05mugs.png"
    },
   
  ];

  return (

    <View style={styles.container}>
      
      <Header quantity={data.length} 
        onPress={() => navigation.navigate('HomeScreen')}
      />
      
      <FlatList 
        data={data}
        renderItem={ ({ item }) => (
          <TouchableOpacity 
            key={data.id} 
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


      <MenuBottom/>

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
