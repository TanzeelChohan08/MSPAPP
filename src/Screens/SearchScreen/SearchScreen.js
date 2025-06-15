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
const SearchScreen = (props) => {
    const Card=[
        {
            id:1,
            pic:images.mini_artroom,
            name:"Art Room"
        },
        {
            id:2,
            pic:images.mini_auditorium_hall,
            name:"Auditorium"
        },
        {
            id:3,
            pic:images.badminton_court,
            name:"Badminton Court"
        },
        {
            id:4,
            pic:images.bowling_line,
            name:"Bowling Lane"
        },
    ]
    return (
        <View style={styles.Main}>
            <CustomHeader text={"Search"} arrow={images.arrow_left} />
            <View style={styles.Inner}>
                <CustomInput placeholder={"Search here your favorite places"} leftImage={images.input_search} color={colors.grey} fontWeight={"400"} mli={sizeHelper.calWp(20)} bdc={colors.primarybdc} bw={0.5}/>
                <CustomLine width={"85%"} align={"center"}/>
                <CustomText text={"Recent Searches"} color={colors.primary} size={28} fontWeight={"700"} />
                <FlatList 
                data={Card}
                keyExtractor={(item)=>item.id}
                contentContainerStyle={{gap:20}}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.CardHandle} onPress={()=>props.navigation.navigate("BookingScreen")}>
                        <Image source={item.pic}/>
                        <CustomText text={item.name} size={25} fontWeight={"700"}/>
                    </TouchableOpacity>
                )}
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
        gap:sizeHelper.calWp(50),
        padding: sizeHelper.calWp(60),
        backgroundColor: "white",
        borderTopLeftRadius: sizeHelper.calWp(60),
        borderTopRightRadius: sizeHelper.calWp(60)
    },
    CardHandle:{
        width:'100%',
        backgroundColor:colors.inputwhite,
        flexDirection:'row',
        borderWidth:1, 
        padding:sizeHelper.calWp(15),
        borderColor:colors.primarybdc,
        alignItems:'center',
        gap:sizeHelper.calWp(20),
        borderRadius:sizeHelper.calWp(20)
    }
})

export default SearchScreen;
