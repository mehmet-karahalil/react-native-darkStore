import React from "react";
import {Image, Text, View, ViewStyle } from "react-native";
import styles from "./ItemsCard.style";

interface Items {
  items: {
        id: number;
        title: string;
        imgURL: string;
        price: string; 
        inStock: boolean;
    };
  style?: ViewStyle;
}

 const ItemsCard = ({items, style}:Items): React.JSX.Element => {
  return (
    <View style={[styles.container, style]}>
        <View>
          <Image style={styles.image} source={{uri:items.imgURL}} />
          <Text style={styles.title} >{items.title} </Text>
        </View>
          <Text style={styles.price} >{items.price}</Text>
   
        {items.inStock === true ? '': <Text style={styles.inStock} >Stokta yok</Text>}
    </View>
  );
};
export default ItemsCard;