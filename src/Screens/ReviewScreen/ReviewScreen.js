import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomBotton";
import CustomLine from "../../components/CustomLine";
const ReviewScreen = () => {
    return (
        <View style={styles.Main}>
            <CustomHeader text={"Rating & Review"} arrow={images.arrow_left} />
            <View style={styles.Inner}>
                <CustomText text={"Rate your experience"} color={colors.primary} size={30} fontWeight={700}  />
                <View style={styles.Rate}>
                    <Image source={images.gold_star}/>
                    <Image source={images.gold_star}/>
                    <Image source={images.gold_star}/>
                    <Image source={images.gold_star}/>
                    <Image source={images.gold_star}/>
                </View>
                <CustomText text={"Share you thoughts"}  size={28} fontWeight={"500"}   />
                <View>
                    
                <CustomInput placeholder={"Write here"} Size={15} fontWeight={400} alignIt={"flex-start"} bw={0.5} bdc={colors.primarybdc} height={sizeHelper.calHp(200)}/>
                <CustomText text={"500 / 500"}  marginT={sizeHelper.calHp(12)} size={21} align={"right"} marginR={sizeHelper.calHp(8)}/>
                </View>
                <View style={{flex:0.3, alignItems:'center', justifyContent:'center'}}>
                    <CustomButton text={"Sumbit"} fontSize={25} fontWeight={"700"}/>
                </View>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: colors.primary
    },
    Inner: {
        flex: 1,
        gap: sizeHelper.calWp(40),
        padding: sizeHelper.calWp(60),
        backgroundColor: "white",
        borderTopLeftRadius: sizeHelper.calWp(60),
        borderTopRightRadius: sizeHelper.calWp(60)
    },
    Rate:{
        width:'100%',
        height:sizeHelper.calHp(100),
        backgroundColor:colors.inputwhite,
        borderWidth:1,
        borderColor:colors.primarybdc,
        borderRadius:sizeHelper.calWp(20),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:sizeHelper.calWp(40)
    }
})

export default ReviewScreen;
