import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import CustomCard from "../../components/CustomCard";
const HomeScreen = (props) => {
    const CardSection = [
        {
            id: 1,
            name: "Art Room",
            pics: images.art_room,
            dateday: "25 May 2024  (Friday)",
            Time: "5 AM - 7 AM"
        },
        {
            id: 2,
            name: "Auditorium",
            pics: images.Auditorium,
            dateday: "25 May 2024  (Friday)",
            Time: "5 AM - 7 AM"
        },
        {
            id: 3,
            name: "Art Room",
            pics: images.art_room,
            dateday: "25 May 2024  (Friday)",
            Time: "5 AM - 7 AM"
        },
    ]
    return (
        <View style={styles.Main}>
            <CustomHeader text={"Home"} />
            <View style={styles.Inner}>
                    <FlatList
                        data={CardSection}
                        ListHeaderComponent={()=>{
                            return(
                                <View>
                                    <View style={styles.walletContainer}>
                        <View style={styles.InnerWallet}>
                            <View style={{ gap: sizeHelper.calWp(20) }} >
                                <CustomText text={"Wallet Balance"} color={colors.white} size={25} fontWeight={500} />
                                <CustomText text={"SGD 135.00"} color={colors.white} size={40} fontWeight={700} />
                            </View>
                            <TouchableOpacity style={styles.plus_img} onPress={() => props.navigation.navigate("BalanceScreen")}>
                                <Image source={images.plus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <CustomInput placeholder={"Search here your favorite places"} color={colors.black + "80"} leftImage={images.input_search} height={sizeHelper.calHp(100)} mli={sizeHelper.calHp(10)} bdc={colors.primarybdc} bw={sizeHelper.calWp(1.5)} />
                    <CustomText text={"Recommended"} color={colors.primary} size={30} fontWeight={700} marginT={sizeHelper.calHp(50)} marginB={sizeHelper.calHp(30)} />
                                </View>
                            )
                        }}
                        keyExtractor={(item) => (item.id)}
                        showsHorizontalScrollIndicator ={false}
                        renderItem={({ item }) =>
                            <View style={styles.CardContainer}>
                                <View style={{ flexDirection: "row", gap: 20, alignItems: 'center' }}>
                                    <Image source={item.pics} style={{ width: sizeHelper.calWp(200), height: sizeHelper.calWp(200) }}/>
                                <View style={{gap:sizeHelper.calWp(15)}}>
                                    <CustomText text={item.name}  size={24} fontWeight={700}/>
                                    <CustomText text={item.dateday} size={19} color={colors.primary} fontWeight={700}/>
                                    <CustomText text={item.Time} size={19} fontWeight={700}/>
                                </View>
                                </View>
                            </View>
                        }
                    />
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
        backgroundColor: "white",
        borderTopLeftRadius: sizeHelper.calWp(60),
        borderTopRightRadius: sizeHelper.calWp(60)
    },
    InnerWallet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    walletContainer: {
        backgroundColor: colors.primary,
        paddingVertical: sizeHelper.calHp(45),
        borderRadius: sizeHelper.calWp(30),
        padding: sizeHelper.calWp(45),
        marginBottom: sizeHelper.calHp(60)
    },
    plus_img: {
        padding: sizeHelper.calWp(20),
        borderRadius: sizeHelper.calWp(50),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    CardContainer: {
        width: "100%",
        // height:sizeHelper.calHp(230),
        borderRadius: sizeHelper.calWp(20),
        backgroundColor: colors.inputwhite,
        borderWidth: sizeHelper.calWp(1, 5),
        borderColor: colors.primary,
        padding: sizeHelper.calWp(15),
        marginBottom: sizeHelper.calHp(40),
        // alignItems:'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;
