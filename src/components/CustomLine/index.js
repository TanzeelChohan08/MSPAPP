import { Text, View } from "react-native";
import { colors } from "../../utils/colors";

const CustomLine = ({
  height,
  marginLeft,
  marginRight,
  marginTop,
  bg,
  align,
  width,
  style,
  radius
}) => {
  return (
    <View style={[
      {
      
      height: height || 1.5,
      width: width || "100%",
      marginTop: marginTop,
      marginRight: marginRight || 0,
      alignSelf:align,
      borderRadius: radius || 0,
      backgroundColor: bg || colors.grey200
      },style,
    ]} />

  );
};
export default CustomLine;
