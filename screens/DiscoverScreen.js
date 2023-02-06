import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";

import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getAttractions, getHotels, getPlacesData } from "../api";

const DiscoverScreen = () => {
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMaindata] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    if (type === "restaurants") {
      getPlacesData().then((data) => {
        setMaindata(data);
        setInterval(() => {
          setIsLoading(false);
        }, 6000);
      });
    } else if (type === "hotels") {
      getHotels().then((data) => {
        setMaindata(data);
        setInterval(() => {
          setIsLoading(false);
        }, 6000);
      });
    } else if (type === "attractions") {
      getAttractions().then((data) => {
        setMaindata(data);
        setInterval(() => {
          setIsLoading(false);
        }, 6000);
      });
    } else {
      setMaindata([]);
      setInterval(() => {
        setIsLoading(false);
      }, 6000);
    }
  }, [type]);

  return (
    <SafeAreaView className="flex-1 bg-white-600 relative mt-10">
      <View className="flex-row items-center justify-between px-5">
        <View>
          <Text className="font-bold text-[40px] text-[#0B646B]">Discover</Text>
          <Text className="text-[#527283] text-[33px]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{ key: "YOUR API KEY", language: "en" }}
        />
      </View>

      {isLoading ? (
        <View className="flex-1 item-center justify-center">
          <ActivityIndicator size={"large"} color="0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
              setMaindata={setMaindata}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
              setMaindata={setMaindata}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
              setMaindata={setMaindata}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center px-4 mt-8 justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center justify-center space-y-8">
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="text-2xl text-[#42828] font-semibold">
                      Opps.....No data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
