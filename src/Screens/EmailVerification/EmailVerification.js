import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import CustomInput from "../../components/CustomInput";
import Checkbox from "../../components/CheckBox";
import CustomButton from "../../components/CustomBotton";
const EmailVerification = (props) => {
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <Image source={images.mail} />
            <CustomText text={"Login Link Sent"} size={27} fontWeight={700}/>
            <CustomText text={"Please click the link sent to"} size={20}/>
            <CustomText text={"123@gmail.com"} size={20} color={colors.primary} fontWeight={700}/>
            <CustomText text={"Do check your spam/junk mailboxes too."} size={21}  fontWeight={400}/>
            <View style={{flexDirection:'row',alignItems:'center',gap:sizeHelper.calWp(25)}}>
            <CustomText text={"Didn’t receive the email?"} size={20}  fontWeight={400}/>
            <CustomButton text={"Resend"} width={sizeHelper.calWp(150)} height={sizeHelper.calHp(70)} fontSize={20} borderRadius={sizeHelper.calWp(25)} onPress={()=>props.navigation.navigate("Tabs")}/>
            </View>
            <CustomText text={"25 seconds remaining"} size={18} fontWeight={400} margin={20}/>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        gap: sizeHelper.calHp(18)
    },
});
export default EmailVerification;
