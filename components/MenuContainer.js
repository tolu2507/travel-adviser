import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const MenuContainer = ({ title, imageSrc, type, setType}) => {
  const handlePress = async () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-1"
      onPress={handlePress}
    >
      <View
        className={`w-20 h-20 p-1 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
