import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import sizeHelper from "../../utils/Helpers";
import images from "../../assets/images";
const CustomCard = ({photo,place,dateday,time}) => {
    return (
        <View style={styles.CardContainer}>
            <View style={{flexDirection:"row", gap:20, alignItems:'center'}}>
                <Image source={photo} style={{width:sizeHelper.calWp(200), height:sizeHelper.calWp(200)}} />
                <View style={{gap:sizeHelper.calWp(22)}}>
                    <CustomText text={place} size={24} fontWeight={700}/>
                    <CustomText text={dateday} size={19} color={colors.primary} fontWeight={700}/>
                    <CustomText text={time} size={19} fontWeight={700}/>
                </View>
            </View>
            
        </View>
    );
};
const styles = StyleSheet.create({
  CardContainer:{
    width:"100%",
    // height:sizeHelper.calHp(230),
    borderRadius:sizeHelper.calWp(20),
    backgroundColor:colors.inputwhite,
    borderWidth:sizeHelper.calWp(1,5),
    borderColor:colors.primary,
    padding:sizeHelper.calWp(15),
    marginBottom:sizeHelper.calHp(40),
    // alignItems:'center',
    justifyContent:'center'
  } 
})

export default CustomCard;
