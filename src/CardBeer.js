import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { EditDelModal } from "./EditDelModal";

import Ionic from "react-native-vector-icons/Ionicons";

export default function CardBeer({ data }) {
  const beerSize = 140;
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.box}>
      <View style={styles.inner}>
        <View style={styles.imgBeer}>
              <Image
                source={{ uri: data.imageUrl }}
                width={beerSize}
                height={beerSize}
                borderRadius={8}
                resizeMode="contain"
                alt="avatar url"
              />
        </View>
        <View style={styles.info}>

            <Modal
              visible={visibleModal}
              transparent={true}
              onRequestClose={() => setVisibleModal(false)}
              animationType="slide"
            >
              <EditDelModal
                title= {data.title}
                handleClose={() => setVisibleModal(false)}
                handleEdit={() => alert("will EDIT the card")}
                handleDelete={() => alert("will DELETE the card")}
              />
            </Modal>

            <Text style={styles.title}>{data.title}</Text>

            <Text style={styles.note} numberOfLines={2}>
              "{data.note}"
            </Text>
            <View style={styles.mugPoint}>
                <View style={styles.imgMug}>
                  <Image
                    
                    source={require("../assets/05mugs1.png")}
                    alt="mug url"
                    aspectRatio={2.3}
                    resizeMode="contain"
                  />
                </View>
                <TouchableOpacity style={styles.dots} onPress={() => setVisibleModal(true)}>
                  <Ionic name="list" size={30} />
                </TouchableOpacity>
            </View>
                   
        </View>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 3,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 1,
  },
  imgBeer: {
    flex: 1,
    paddingLeft:5,
  },
  info: {
    flex:1,
  },
  dots: {
    left: 15,
    top: 13
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
  },
  note: {
    height: 30,
    fontSize: 12,
    marginTop: 5,
    marginRight: 3
  },
  imgMug: {
   
            
  },
  mugPoint: {
    flexDirection: 'row',
  }
});
