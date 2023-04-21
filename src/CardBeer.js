import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { EditDelModal } from "./EditDelModal";

import Ionic from "react-native-vector-icons/Ionicons";

export default function CardBeer({ data }) {
  const beerSize = 130;
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.box}>
      <View style={styles.inner}>
        <TouchableOpacity onPress={() => setVisibleModal(true)}>
          <Ionic name="list" size={30} />
        </TouchableOpacity>

        <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
          animationType="slide"
        >
          <EditDelModal
            handleClose={() => setVisibleModal(false)}
            handleEdit={() => alert("will EDIT the card")}
            handleDelete={() => alert("will DELETE the card")}
          />
        </Modal>

        <Text style={styles.title}>{data.title}</Text>

        <TouchableOpacity>
          <Image
            source={{ uri: data.imageUrl }}
            width={beerSize}
            height={beerSize}
            borderRadius={8}
            resizeMode="contain"
            alt="avatar url"
          />
        </TouchableOpacity>

        <Text style={styles.note} numberOfLines={2}>
          {data.note}
        </Text>

        <Image
          source={require("../assets/05mugs.png")}
          alt="mug url"
          aspectRatio={1.2}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 175,
    padding: 3,
  },
  inner: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  note: {
    height: 30,
    fontSize: 12,
    marginTop: 20,
  },
});
