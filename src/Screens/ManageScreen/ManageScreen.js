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
const ManageScreen = (props) => {
    return (
        <View style={styles.Main}>
            <CustomHeader text={"Manage Space"} arrow={images.arrow_left} />
            <View style={styles.Inner}>
                <TouchableOpacity style={styles.InnerContainers} onPress={()=>props.navigation.navigate("ReviewScreen")}>
                    <View style={styles.ImageCircle}>
                        <Image source={images.manage_history} />
                    </View>
                    <View style={{flex:1,alignItems:'flex-start', marginLeft:sizeHelper.calWp(20)}}>                        
                    <CustomText text={"Manage Space Details"} size={25} fontWeight={"700"} />
                    </View>
                        <Image source={images.arrow_right} />
                </TouchableOpacity>
                <View style={styles.InnerContainers}>
                    <View style={styles.ImageCircle}>
                        <Image source={images.calendar} />
                    </View>
                    <View style={{flex:1,alignItems:'flex-start', marginLeft:sizeHelper.calWp(20)}}>
                    <CustomText text={"Manage Calendar"}size={25} fontWeight={"700"}  />
                    </View>
                        <Image source={images.arrow_right} />
                </View>
                <View style={styles.InnerContainers}>
                    <View style={styles.ImageCircle}>
                        <Image source={images.history} />
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'flex-start', marginLeft:sizeHelper.calWp(20)}}>
                    <CustomText text={"Manage Bookings"}size={25} fontWeight={"700"}  />
                    </View>
                    <View style={styles.NotificationContainer}>
                        <CustomText text={"2"} color={colors.white} size={15} fontWeight={"700"}/>
                    </View>
                    </View>
                        <Image source={images.arrow_right} />
                </View>
                <View style={styles.InnerContainers}>
                    <View style={styles.ImageCircle}>
                        <Image source={images.disable} />
                    </View>
                    <View style={{flex:1,alignItems:'flex-start', marginLeft:sizeHelper.calWp(20)}}>
                    <CustomText text={"Disable Space"} size={25} fontWeight={"700"}  />
                    </View>
                   <Image source={images.arrow_right} />
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
    ImageCircle:{
        backgroundColor:"#F3F3F3",
        borderWidth:1,
        borderColor:colors.primarybdc,
        borderRadius:sizeHelper.calWp(50),
        width:sizeHelper.calWp(100),
        padding:sizeHelper.calWp(25)
    },
    InnerContainers:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    NotificationContainer:{
        width:sizeHelper.calWp(25),
        height:sizeHelper.calWp(25),
        backgroundColor:'#FF0000',
        borderRadius:sizeHelper.calWp(50),
        alignItems:'center',
        justifyContent:'center',
    }
})

export default ManageScreen;
