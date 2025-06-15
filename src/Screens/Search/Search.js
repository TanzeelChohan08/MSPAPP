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
const Search = (props) => {
    const ArtRoomCard = [
        {
            id: 1,
            picture: images.art_room,
            Place: 'Art Room, Singapore',
            Dig: "New Dig",
            Rating: "5.0",
            Star: images.star,
            Number: "(101)",
            Price: "$24"
        },
        {
            id: 2,
            picture: images.art_room,
            Place: 'Art Room, Singapore',
            Dig: "New Dig",
            Rating: "5.0",
            Star: images.star,
            Number: "(101)",
            Price: "$24",
            isBook: true
        },
        {
            id: 3,
            picture: images.art_room,
            Place: 'Art Room, Singapore',
            Rating: "5.0",
            Star: images.star,
            Number: "(101)",
            Price: "$24"
        },
    ]
    return (
        <View style={styles.Main}>
            <CustomHeader text={"Search"} arrow={images.arrow_left} />
            <View style={styles.Inner}>
                <View style={styles.outerfilterView}>
                    <View>
                        <CustomText text={"3 Properties"} size={23} color={"#000"} />
                        <CustomText text={"Badminton Court"} size={26} fontWeight={"700"} />
                    </View>
                    <View style={styles.filter}>
                        <Image source={images.filter} />
                    </View>
                </View>
                <CustomLine width={"85%"} align={"center"} />
                <FlatList
                    data={ArtRoomCard}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.CardContainer}>
                            <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>

                                <Image source={item.picture} style={{ width: sizeHelper.calWp(200), height: sizeHelper.calWp(200) }} />
                                <View style={{gap:sizeHelper.calWp(15)}}>
                                    <CustomText text={item.Place} size={25} color={colors.primary} fontWeight={"700"}/>
                                    <CustomText text={item.Dig} size={23} fontWeight={"700"} />
                                    <View style={{ flexDirection: 'row',alignItems:'center', gap:5 }}>
                                        <CustomText text={item.Rating} fontWeight={"700"} size={22}/>
                                        <Image source={item.Star} />
                                        <CustomText text={item.Number} fontWeight={"700"} size={22}/>
                                    </View>
                                    <View style={{ flexDirection: 'row',alignItems:'center', justifyContent:'space-between', width:'78%'}}>
                                        <CustomText text={item.Price} size={25} color={colors.primary} fontWeight={"700"} />
                                        {
                                            item.isBook && (
                                                <CustomButton text={"Insta Book"} width={sizeHelper.calWp(150)} fontSize={16} fontWeight={"700"} height={30} borderRadius={sizeHelper.calWp(12)}  />

                                            )
                                        }
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                />
                <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={styles.map} onPress={()=>props.navigation.navigate("ManageScreen")}>
                    <Image source={images.tabler_map} />
                    <CustomText text={"Map"} size={22} color={colors.white} fontWeight={"700"} />
                </TouchableOpacity>
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
    filter: {
        width: sizeHelper.calWp(100),
        padding: sizeHelper.calWp(20),
        borderWidth: 1,
        borderRadius: sizeHelper.calWp(20),
        borderColor: colors.primarybdc,
        backgroundColor: colors.inputwhite,
    },
    outerfilterView: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
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
    },
    map:{
        backgroundColor:colors.primary,
        width:sizeHelper.calWp(180),
        height:sizeHelper.calHp(80),
        padding:sizeHelper.calWp(20),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:sizeHelper.calWp(20),
        gap:sizeHelper.calWp(10)
    }
})

export default Search;
