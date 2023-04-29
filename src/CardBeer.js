import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { EditDelModal } from "./EditDelModal";
import { ConfModal } from "./ConfModal";
import { supabase } from "../supabase/supabase"

import mug0 from "../assets/mugsStar/00mugs.png"
import mug1 from "../assets/mugsStar/01mugs.png"
import mug2 from "../assets/mugsStar/02mugs.png"
import mug3 from "../assets/mugsStar/03mugs.png"
import mug4 from "../assets/mugsStar/04mugs.png"
import mug5 from "../assets/mugsStar/05mugs.png"

import Ionic from "react-native-vector-icons/Ionicons";

export default function CardBeer({ data }) {
  const beerSize = 140;
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalConf, setVisibleModalConf] = useState(false);
  const [mugStar, setMugStar] = useState(mug0)


  const StarClick = (x) => {
    if(data.star == 0) {
      setMugStar(mug0)
    }
    if(data.star == 1) {
      setMugStar(mug1)
    }
    if(data.star == 2) {
      setMugStar(mug2)
    }
    if(data.star == 3) {
      setMugStar(mug3)
    }
    if(data.star == 4) {
      setMugStar(mug4)
    }
    if(data.star == 5) {
      setMugStar(mug5)
    }
  }


  const cleanModal = () => {
    setVisibleModalConf(false)
    setVisibleModal(false);
  }


  const deleteBeer = async (id) => {
    //add a confirmation later
    const { data: Beer, error } = await supabase
      .from('Beer')
      .delete()
      .eq('id', id)
  }
  
  useEffect(() => {
    StarClick(data.star)
    
  }, []);

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
                handleDelete={() => setVisibleModalConf(true)}
              />
            </Modal>




            <Modal
              visible={visibleModalConf}
              transparent={true}
              onRequestClose={() => setVisibleModalConf(false)}
              animationType="slide"
            >
              <ConfModal
                title= {data.title}
                handleClose={() =>  cleanModal()}
                handleCancel={() => cleanModal()}
                handleYes={() => deleteBeer(data.id)}
              />
            </Modal>

            <Text style={styles.title}>{data.title}</Text>

            <Text style={styles.note} numberOfLines={2}>
              "{data.note}"
            </Text>
            <View style={styles.mugPoint}>
                <View style={styles.imgMug}>
                  <Image
                    source={mugStar}
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
    paddingLeft:1,
  },
  info: {
    flex:1,
  },
  dots: {
    left: 15,
    top: 25
  },
  title: {
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
