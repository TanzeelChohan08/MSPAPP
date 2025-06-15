import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomBotton";
import CustomLine from "../../components/CustomLine";
const BookingScreen = (props) => {
    return (
        <View style={styles.Main}>
            <CustomHeader text={"Booking Place"} arrow={images.arrow_left} />
            <View style={styles.Inner}>
                <CustomText text={"Enter Booking Date"} size={25} color={colors.black} marginL={sizeHelper.calHp(10)} fontWeight={"700"}/>
                <CustomInput placeholder={"25 May 2024"} fontWeight={"700"} color={colors.black} Size={14} ml={20} marginb={12}/>
                <CustomText text={"Enter Booking Time"} size={25} color={colors.black} marginL={sizeHelper.calHp(10)} fontWeight={"700"}/>
                <CustomInput placeholder={"11 AM"} fontWeight={"700"} color={colors.black} Size={14} ml={20} marginb={12}/>
                <CustomText text={"Enter Booking Period"} size={25} color={colors.black} marginL={sizeHelper.calHp(10)} fontWeight={"700"}/>
                <CustomInput placeholder={"2 hours"} fontWeight={"700"} color={colors.black} Size={14} ml={20} marginb={12}/>
                <View style={{flex:0.4, alignItems:'center', justifyContent:'center'}}>
                    <CustomButton text={"Next"} fontSize={25} fontWeight={"700"} onPress={()=>props.navigation.navigate("Search")}/>
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
        gap:sizeHelper.calWp(20),
        padding: sizeHelper.calWp(60),
        backgroundColor: "white",
        borderTopLeftRadius: sizeHelper.calWp(60),
        borderTopRightRadius: sizeHelper.calWp(60)
    },
})

export default BookingScreen;
