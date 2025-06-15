import { TouchableOpacity } from "react-native"
import { colors } from "../../utils/colors"
import CustomText from "../CustomText"
import sizeHelper from "../../utils/Helpers"

const CustomButton =({
    text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  disable,
  isLoading,
  fontWeight,
  shadowColor,
  marginTop,
  fontSize,
  borderWidth,
  alignSelf,
  padding,
  position,
  top,
  bottom,
  shadowOffset,
  marginLeft
})=>{
    return (
        <TouchableOpacity 
        onPress={onPress}
        disabled={disable}
        activeOpacity={0.9}
        style={{
            width: width || '100%',
            height: height || sizeHelper.calHp(100),
            backgroundColor: bgColor || colors.primary,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: alignSelf ,
            borderRadius: borderRadius || sizeHelper.calWp(20),
            marginTop: marginTop ,
            marginLeft: marginLeft,
            elevation: notRequiredShadow,
            borderWidth:borderWidth,
            borderColor: borderColor,
            shadowColor:shadowColor,
            shadowOffset: shadowOffset,
            shadowOpacity: notRequiredShadow ? 0 : 0.2,
            shadowRadius: 5,
            padding:padding,
            position:position,
            top: top,
            bottom: bottom
        }}
        >
            <CustomText text={text}
            color={ textColor || colors.white}
            fontWeight={fontWeight}
            size={fontSize ||16} />
        </TouchableOpacity>
    )
}
export default CustomButton