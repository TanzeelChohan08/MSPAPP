import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import sizeHelper from "../../utils/Helpers";



const CustomInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  fd,
  maxLength,
  leftImage,
  SecondrightImage,
  rightImage,
  imgWidth,
  imgHeigth,
  ml,
  mT,
  bg,
  Size,
  width,
  align,
  fontWeight,
  marginLeft,
  bw,
  bdc,
  style,
  txalign,
  justifyContent,
  textContentType,
  paddingHorizontal,
  height,
  mli,
  marginb,
  alignIt
}) => {
  return (
    <View style={{ ...props,marginTop: mT, }}>
      <View style={{ 
        flexDirection: "row" ,
        alignItems:alignIt || "center",
        alignSelf: align || 'center',
         borderColor:bdc,
         backgroundColor:bg || colors.inputwhite,
         borderWidth: bw ,
         justifyContent: "space-between",
         paddingHorizontal: paddingHorizontal ||sizeHelper.calWp(20),
         borderRadius:sizeHelper.calWp(20),
         width: width ||"100%",
         height:height,
         marginLeft: marginLeft,
         marginBottom:marginb,
    }}>
         {leftImage && (
            <View
              activeOpacity={0.6}
              style={{ justifyContent: "center", alignItems: "center"}}
            >
              <Image
                source={leftImage}
                resizeMode="contain"
                style={{
                  width: imgWidth|| sizeHelper.calWp(40),
                  height: imgHeigth  ||sizeHelper.calWp(40),
                  marginLeft:mli,
                }}
              />
            </View>
          )}



          <View style={{ flex: 1,marginHorizontal:10 }}>
            <TextInput
              value={value}
              editable={editable}
              style={[{
                fontSize: Size ||sizeHelper.calHp(20),
                height: sizeHelper.calHp(100),
                backgroundColor: bg ,
                fontFamily:"Urbanist-SemiBold",
                fontWeight: fontWeight,
                textAlign: txalign , 
                ...(isCenter && { alignSelf: "center" }),
              },style,
            ]}
              placeholder={placeholder}
              placeholderTextColor={color || colors.black}
              keyboardType={keyboard}
              maxLength={maxLength}
              textContentType={textContentType}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              numberOfLines={1}
              autoCapitalize="none"
            />
          </View>
          {rightImage && (
            <TouchableOpacity
              onPress={onShowPassword}
              activeOpacity={0.6}
              disabled={!onShowPassword}
              style={{ justifyContent: justifyContent || "center", alignItems: "center", flexDirection:fd || 'row', marginLeft: ml}}
            >
              <Image
                source={rightImage}
                style={{
                  width: imgWidth || sizeHelper.calWp(40),
                  height: imgHeigth || sizeHelper.calWp(40),
                }}
              />
            </TouchableOpacity>
          )}
          {SecondrightImage && (
            <TouchableOpacity
              onPress={onShowPassword}
              activeOpacity={0.6}
              disabled={!onShowPassword}
              style={{ justifyContent: justifyContent || "center", alignItems: "center", flexDirection:fd || 'row', marginLeft: ml}}
            >
              <Image
                source={SecondrightImage}
                style={{
                  marginLeft:ml,
                  width: imgWidth || sizeHelper.calWp(40),
                  height: imgHeigth || sizeHelper.calWp(40),
                }}
              />
            </TouchableOpacity>
          )}
    
        </View>
    </View>
  );
};
export default CustomInput;
