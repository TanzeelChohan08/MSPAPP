import { Text } from "react-native";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/Fonts";
import sizeHelper from "../../utils/Helpers";

const CustomText = ({ color, size, text, style, fontWeight, lineHeight,fontfam,align ,marginT,marginR,marginB,marginL,letterSpacing ,bg}) => {
  return (
    <Text
      style={[
        {
          marginTop: marginT,
          marginRight: marginR,
          marginLeft: marginL,
          marginBottom: marginB,
          color: color || colors.black,
          fontSize: sizeHelper.calHp( size || 20),
          fontFamily: fontfam || fonts.bold,
          fontWeight: fontWeight || "500",
          lineHeight: lineHeight,
          textAlign:align,
          letterSpacing:letterSpacing, 
          backgroundColor:bg
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};
export default CustomText;
