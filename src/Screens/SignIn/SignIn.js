import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import CustomInput from "../../components/CustomInput";
import Checkbox from "../../components/CheckBox";
import CustomButton from "../../components/CustomBotton";

const CText = ({ children, style }) => {
  return <Text style={[{ fontSize: 12 ,marginLeft:5,}, style]}>{children}</Text>;
};
const SignIn = (props) => {
  const [email,setEmail] = useState("");
  const [emailError,setEmailError] = useState(false);

  const saveData = ()=>{
    if(!email){
      setEmailError(true)
    }else{
      setEmailError(false)
    }
    
    if(!email){
      return false
      }
    //   else{
    //     props.navigation.navigate("EmailVerification")
    // }
  }

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}  />
      <Image source={images.logo} style={{alignSelf:"center", marginBottom:"12%",  marginTop:'20%' }} />
      <View >
        <CustomText text={"Welcome To MakeShiftPlans (DEV)"} color={colors.primary} fontWeight={700} size={25} />
        <CustomText text={"Find and rent spaces on an hourly basis"} color={"#000000BF"} fontWeight={700}  margin={2}/>
      </View>
      <CustomInput placeholder={"Enter email address"} leftImage={images.input_mail}  Size={14} color={"#000000"}  bdc={colors.primarybdc} bw={1} mT={25} height={sizeHelper.calHp(100)} mli={10} value={email} onChangeText={(text)=>setEmail(text)} keyboard={"email-address"}/>

        { emailError ?<Text style={{color:"red", fontWeight:400}}>Please Enter Valid Email</Text>:null }

      <View style={{marginTop:sizeHelper.calHp(30), marginLeft:sizeHelper.calWp(10), flexDirection:'row'}}>
        <Checkbox  isChecked={false}/>
        <CText >
          I agree to the {" "}
          <Text style={{color:colors.primary}}>Privacy Policy</Text>,{" "}
          <Text style={{color:colors.primary}}>Terms of Service</Text>, and the{" "}
          <Text style={{color:colors.primary}}>Payments Terms of Service</Text>
        </CText>
      </View>
      <CustomButton text={"Sign In"} marginTop={sizeHelper.calHp(50)} fontSize={25} fontWeight={800} onPress={()=>props.navigation.navigate("EmailVerification")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor:'white',
    padding:sizeHelper.calWp(45)
  }
});
export default SignIn;
