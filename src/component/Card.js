
import { TabActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, Button, } from "react-native";
import { screenName } from "../route/ScreenNames";
import MenuContext from "../store/MenuContext";
import RatingStar from "./RatingStar";
const Card = (props) => {
  const { total } = useContext(MenuContext);
  const [supmited, setSupmited] = useState(false);

  const onPressHandler = () => {
    setSupmited(!supmited);
  };
  const { image, title, price, cardPressed,icons} = props;
  const navigation = useNavigation();
  const onCardsPress = () => {
    if (cardPressed) {
        cardPressed(price)
    } else {
      navigation.navigate(screenName.cake, { data: props })
    }
  };
  return (
    <TouchableOpacity style={[styles.container]} onPress={onCardsPress} activeOpacity={0.6}>
      <View style={styles.CardContainer}>
        <Image style={styles.ImageStyle} source={image} />

        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{title} </Text>
          {
            price != undefined &&
            <Text style={styles.catogoryStyle}>$
              <Text style={styles.Container1}>{price}
              </Text>
            </Text>
          }
          <RatingStar />
        </View>
      </View>
      
    </TouchableOpacity>
  )
};

const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 30;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '800',
    backgroundColor: "black",
  },
  Container1: {
    color: "black",
    fontSize:20
  },

  CardContainer: {
    width: deviceWidth - 70,
    borderWidth: 0.75,
    marginTop:20,
    borderColor: "pink",
    backgroundColor: '#EB9CB1',
    paddingBottom: 10,
    // flexDirection:"row",
    // height: 230,
    borderRadius: radius,
    shadowColor: '#000',
    shadowOffset: {
      width: 50,
      height: 50
    },
    shadowOpacity: 0.75,
    shadowRadius: 15,
    elevation: 10,
    // paddingLeft:120
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 20,
  },
  ImageStyle: {
    height: 190,
    width: deviceWidth - 70,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,

  },
  titleStyle: {
    fontSize:25,
    fontWeight: '600',
  },

  catogoryStyle: {
    color: 'green',
    fontSize:20
  },
  textContainer: {
    paddingTop: 10,
    paddingLeft: 20,
  },

})
export default Card;