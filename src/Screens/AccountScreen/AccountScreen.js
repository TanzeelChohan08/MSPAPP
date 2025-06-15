import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import CustomCard from "../../components/CustomCard";
import CustomLine from "../../components/CustomLine";
const AccountScreen = (props) => {
    return (
        <View style={styles.Main}>
            <CustomHeader text={"Account"} />
            <View style={styles.Inner}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                <View style={{ flex: 0.7, alignItems: 'center', gap: sizeHelper.calWp(20) }}>
                    <Image source={images.John} />
                    <CustomText text={"John Smith"} size={27}  color={colors.primary} fontWeight={"700"} />
                </View>
                <CustomText text={"Account Management"} size={27} marginT={sizeHelper.calHp(100)} color={colors.primary} fontWeight={"700"} />
                <View style={{ gap: sizeHelper.calWp(80), marginTop: sizeHelper.calHp(50) }}>
                    <View style={styles.InnerContainers} >
                        <View style={styles.ImageCircle}>
                            <Image source={images.info} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: sizeHelper.calWp(20) }}>
                            <CustomText text={"Personal Info"} size={25} fontWeight={"700"} />
                        </View>
                        <Image source={images.arrow_right} />
                    </View>
                    <View style={styles.InnerContainers}>
                        <View style={styles.ImageCircle}>
                            <Image source={images.activity} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: sizeHelper.calWp(20) }}>
                            <CustomText text={"My Activity"} size={25} fontWeight={"700"} />
                        </View>
                        <Image source={images.arrow_right} />
                    </View>
                    <View style={styles.InnerContainers}>
                        <View style={styles.ImageCircle}>
                            <Image source={images.setting} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: sizeHelper.calWp(20) }}>
                            <CustomText text={"Settings"} size={25} fontWeight={"700"} />
                        </View>
                        <Image source={images.arrow_right} />
                    </View>

                    <View style={styles.InnerContainers}>
                        <View style={styles.ImageCircle}>
                            <Image source={images.invite_friend} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: sizeHelper.calWp(20) }}>
                            <CustomText text={"Invite Friends"} size={25} fontWeight={"700"} />
                        </View>
                        <Image source={images.arrow_right} />
                    </View>
                </View>
                    <CustomLine width={"85%"} align={"center"} marginTop={sizeHelper.calHp(90)} />
                    {/* <View style={{flex:1, alignItems:'center', justifyContent:"center", flexDirection:'row', marginTop:sizeHelper.calHp(50)}}>
                        <View style={styles.LogOutImageCircle}>
                            <Image source={images.logout}/>
                        </View>
                        <CustomText text={"Log Out"} color={"#FF0000"} size={30} marginL={sizeHelper.calWp(20)}/>
                    </View> */}
                </ScrollView>
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
        padding: sizeHelper.calWp(45),
        gap: sizeHelper.calWp(50),
        backgroundColor: "white",
        borderTopLeftRadius: sizeHelper.calWp(60),
        borderTopRightRadius: sizeHelper.calWp(60)
    },

    ImageCircle: {
        backgroundColor: "#F3F3F3",
        borderWidth: 1,
        borderColor: colors.primarybdc,
        borderRadius: 100,
        width: sizeHelper.calWp(100),
        height: sizeHelper.calWp(100),
        alignItems:'center',
        justifyContent:'center',
    },
    LogOutImageCircle: {
        backgroundColor: "#FF0000" +"15",
        borderWidth: 1,
        borderColor: colors.primarybdc,
        borderRadius: 100,
        width: sizeHelper.calWp(100),
        height: sizeHelper.calWp(100),
        alignItems:'center',
        justifyContent:'center',
    },
    InnerContainers: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default AccountScreen;
