import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import images from '../../assets/images';
import { colors } from '../../utils/colors';
import CustomText from '../CustomText';

const CustomSettingOptioms = (
    item,
    text,
    Pic
) => {
    
  return (
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View>
        <Image source={item} />
        <CustomText text={text} />
        </View>
        <Image source={Pic} />
    </View>
  );
};

export default CustomSettingOptioms;
