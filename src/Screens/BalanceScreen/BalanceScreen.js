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
const BalanceScreen = (props) => {
    const ButtonData = [
        {
            id: 1,
            num: "10"
        },
        {
            id: 2,
            num: "20"
        },
        {
            id: 3,
            num: "50"
        },
        {
            id: 4,
            num: "100"
        },
    ]
    return (
        <View style={styles.Main}>
            <CustomHeader text={"Top Up Wallet"} arrow={images.arrow_left} />
            <View style={styles.Inner}>
                <View style={styles.InnerContainer}>
                    <CustomText text={"Enter the amount to top up"} size={20} fontWeight={"500"} color={colors.black + "85%"} />
                    <View style={styles.TopupInput}>
                        <CustomText text={"S$"} size={30} fontWeight={"600"} marginL={25} />
                        <TextInput style={styles.InnerTopupInput} />
                    </View>
                    <CustomText text={"Wallet balance : S$ 135.00"} color={colors.black + "85%"} />
                    <CustomText text={"Or choose from here"} size={22} color={colors.black + "85%"} />
                    <View style={styles.ButtonHandle}>
                        {
                            ButtonData.map((item) => <CustomButton text={item.num} width={"19%"} bgColor={colors.white} borderColor={colors.primarybdc} textColor={colors.black} borderWidth={2} fontSize={27} height={55}  />)
                        }
                    </View>
                </View>
                <View style={styles.OuterButton}>
                <CustomButton text={"Top Up"} fontSize={25} fontWeight={"700"} onPress={()=>props.navigation.navigate("SearchScreen")}/>
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
        padding: sizeHelper.calWp(60),
        backgroundColor: "white",
        borderTopLeftRadius: sizeHelper.calWp(60),
        borderTopRightRadius: sizeHelper.calWp(60)
    },
    InnerContainer: {
        width: '100%',
        backgroundColor: colors.inputwhite,
        borderWidth: 0.6,
        borderRadius: sizeHelper.calWp(20),
        borderColor: colors.primarybdc,
        padding: sizeHelper.calWp(40),
        alignItems: 'center',
        gap: sizeHelper.calWp(25)
    },
    TopupInput: {
        width: sizeHelper.calWp(270),
        borderWidth: 2,
        height: sizeHelper.calHp(100),
        backgroundColor: 'white',
        borderColor: colors.primarybdc,
        borderRadius: sizeHelper.calWp(20),
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        // gap:sizeHelper.calWp(5)
    },
    InnerTopupInput: {
        // borderWidth:1,
        width: '50%',
        fontSize: 20
    },
    ButtonHandle:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:sizeHelper.calWp(20)
    },
    OuterButton:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default BalanceScreen;
