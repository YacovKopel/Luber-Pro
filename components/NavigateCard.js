import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const NavigateCard = () => {
  return (
    <SafeAreaView
    style= {tw `bg-white flex-1`}>
      <Text 
      style={tw `text-center py-5 text-xl`}>Good Morning Jacob</Text>
      <View style={tw `border-t border-gray-200 flex-shrink`}>
      <View>
        <GooglePlacesAutocomplete 
        placeholder='Where To?'
        styles={toInputBoxStyles}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400} />
      </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding: 20,
        flex:0,
    },
    textInput: {
        backgroundColor:"#00000F",
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom:0,
    },
})