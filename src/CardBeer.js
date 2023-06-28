import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { EditDelModal } from "./EditDelModal";
import { ConfModal } from "./ConfModal";
import { supabase } from "../supabase/supabase"
import { useNavigation } from '@react-navigation/native';


import mug0 from "../assets/mugsStar/00mugs.png"
import mug1 from "../assets/mugsStar/01mugs.png"
import mug2 from "../assets/mugsStar/02mugs.png"
import mug3 from "../assets/mugsStar/03mugs.png"
import mug4 from "../assets/mugsStar/04mugs.png"
import mug5 from "../assets/mugsStar/05mugs.png"
import visc1 from "../assets/strong/temp1.png"
import visc2 from "../assets/strong/temp2.png"
import visc3 from "../assets/strong/temp3.png"
import visc4 from "../assets/strong/temp4.png"

export default function CardBeer({ data }) {
  
  
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalConf, setVisibleModalConf] = useState(false);
  const [mugStar, setMugStar] = useState(mug0)
  const [newVisc, setNewVisc] = useState(visc1)
  const [imageUrlStorage, setImageUrlStorage] = useState();

  const navigation = useNavigation();


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

  const viscosityLike = (y) => {
    if(data.viscosity == 1) {
      setNewVisc(visc1)
    }
    if(data.viscosity == 2) {
      setNewVisc(visc2)
    }
    if(data.viscosity == 3) {
      setNewVisc(visc3)
    }
    if(data.viscosity == 4) {
      setNewVisc(visc4)
    }
  }


  const cleanModal = () => {
    setVisibleModalConf(false)
    setVisibleModal(false);
  }


  //just call 2 functions bellow
  const deleteBeer = async (data) => {
    deleteDatabase(data.id);
    deleteStorageFile(data.imageUrl);
  }
  //to delete image file Storage 
  const deleteStorageFile = async (path) => {
    const { data, error } = await supabase
    .storage
    .from('beerImagesStorage')
    .remove([path])
  }
  //to delete from database
  const deleteDatabase = async (id) => {
    const { data: Beer, error } = await supabase
      .from('Beer')
      .delete()
      .eq('id', id)
  }
  

  useEffect(() => {
    StarClick(data.star)
    viscosityLike(data.viscosity)
  }, [data.star,data.viscosity ]);

  return (
    <View style={styles.box}>
      <View style={styles.inner}>
        <View style={styles.imgBeer}>
              <Image
                source={{ uri: data.fullUrl }}
                width={80}
                height={110}
                borderRadius={8}
                resizeMode="contain"
                alt="avatar url"
              />
        </View>

        <View style={styles.heavy}>
            <Text style={styles.strong}>
              strong
            </Text>
            <Image
              source = {newVisc} 
              borderRadius={8}
              resizeMode="contain"
            />
            <Text style={styles.strong}>
              lighter
            </Text>
        </View>

        <View style={styles.info}>

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
                  <Image
                    source={require("../assets/menuBottom/3lines.png")}
                     style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
            
              {/* Modal to Edit or Delete */}
              <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                animationType="slide"
              >
                <EditDelModal
                  title= {data.title}
                  handleClose={() => setVisibleModal(false)}
                  handleEdit={() => navigation.navigate('EditScreen', { paramKey: data, userId: data.id_user, addItem: false  })} 
                  handleDelete={() => setVisibleModalConf(true)}
                />
              </Modal>

              {/* Modal to confirm Delete */}
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
                  handleYes={() => deleteBeer(data)}
                />
              </Modal>
            
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
    backgroundColor: "#ECE4B7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 1,
  },
  imgBeer: {
    flex: 0.5,
    paddingLeft:1,
    marginRight: 5
  },
  heavy: {
    flexDirection: 'column',
    color: 'black',
    marginRight: 40,
    width: '10%',
    textAlign: 'center',
    alignItems: "center",
  },
  strong: {
    fontSize: 9, 
  },
  info: {
    flex:1,
  },
  dots: {
    left: 25,
    top: 15
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
  mugPoint: {
    flexDirection: 'row',
  }
});
