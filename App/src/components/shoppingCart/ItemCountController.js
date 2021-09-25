import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ItemCountController({icon, color, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Icon name={icon} size={40} color={color} />
    </TouchableOpacity>
  );
}
