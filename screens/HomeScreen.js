import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { View, Text, SafeAreaView,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-6 mt-12 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* second section */}

      <View className="px-6 mt-5 space-y-3">
        <Text className="text-[#3C6072] text-[40px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[35px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consequat ante dolor, vel.
        </Text>
      </View>

      {/* circle section */}
      <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-28 -right-36"></View>
      <View className="w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* image section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation={"fadeIn"}
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-15"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
