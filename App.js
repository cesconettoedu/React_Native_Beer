import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import Header from './src/Header';
import CardBeer from './src/CardBeer';
import MenuBottom from './src/MenuBottom';

export default function App() {


  const data = [
    {
    id: 130,
    title: "Alexander Keiths",
    imageUrl: "https://cdn.shopify.com/s/files/1/0052/0853/9197/products/full_e48f6bab-351d-4b03-9dbc-a3f19c13c761_580x.jpg?v=1543789208",
    note: "ok, i can drink all day",
    star: 4,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 131,
    title: "Blue Moon",
    imageUrl: "https://www.bluemoonbrewingcompany.com/sites/bluemoon/files/styles/beers/public/beers/2018-06/BlueMoon-BelgianWhite.png?itok=AonO8W6_",
    note: "great beer ",
    star: 4,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 129,
    title: "Brahma",
    imageUrl: "https://www.wine-searcher.com/images/labels/80/19/10608019.jpg",
    note: "can drink, but not a lot",
    star: 2,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 122,
    title: "Budweiser",
    imageUrl: "https://aem.lcbo.com/content/dam/lcbo/products/9/0/2/6/902619.jpg.thumb.1280.1280.jpg",
    note: "light beer, cheap to drink all day",
    star: 2,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 121,
    title: "Coors light",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXV4cm80sdH8KK6rqABqxud2bm70o9UOLmg&usqp=CAU",
    note: "Like water, just if not have other",
    star: 1,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 124,
    title: "Corona",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbfdQL_spsHJv-2qV97aAATlfmKzMtlRBAg&usqp=CAU",
    note: "good , light , can drink all day",
    star: 4,
    mugs: "../assets/05mugs.png"
    },
    {
    id: 123,
    title: "Creemore Lager",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg01AmibJ3TKmfiVXr_ao9VSBvydAVVwlwQ&usqp=CAU",
    note: "good, ",
    star: 4,
    mugs: "../assets/05mugs.png"
    }
  ];

  return (

    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList 
        data={data}
        renderItem={ ({ item }) => <CardBeer data={item}/>}
        numColumns={2}
      />
      <MenuBottom/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'gray',
  },


});
