import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [selectedStyle, setSelectedStyle] = useState("bg-white");

  const toggleStyle = () => {
    setSelectedStyle(
      selectedStyle === "bg-white" ? "bg-pink-500 text-white" : "bg-white"
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 ${selectedStyle}`}>
      <Text style={tw`text-center py-5 text-xl ${selectedStyle}`}>
        Good Morning, Jacob!
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where To?"
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: API_KEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={toggleStyle}
          style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Uber</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleStyle}
          style={tw`flex flex-row justify-between bg-pink-500 w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="car" type="ionicon" color="black" size={22} />
          <Text style={tw`text-center`}>Lyft</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    paddingBottom: 0,
  },
});
