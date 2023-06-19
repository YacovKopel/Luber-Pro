import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data= [{
    id: "LUber-X-123",
    title:"LUberX",
    multiplier:1,
    image: "https://links.papareact.com/3pn",
},
{
    id: "LUber-XL-123",
    title:"LUberXL",
    multiplier:1.2,
    image: "https://links.papareact.com/5w8",
},
{
    id: "LUber-LUX-123",
    title:"LUber LUX",
    multiplier:1.75,
    image: "https://links.papareact.com/7pf",
},
]

const RideOptionsCard = () => {
    const navigation= useNavigation()
    const [selected, setSelected]=useState(null)
  return (
    <SafeAreaView style={tw`flex-grow bg-white px-3`}>
        <View>
            <TouchableOpacity
            onPress={ () => navigation.navigate("NavigateCard")}
            style={tw`absolute top-3 left-5 p-3 z-50 rounded-full`}>
                <Icon
                name="chevron-left" type="font-awesome"/>
            </TouchableOpacity>
      <Text 
      style={tw` text-center py-5 text-xl`}
      >Select a Ride</Text>
      </View>

      <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({item: {id, title, multiplier,image}, item })=>(
<TouchableOpacity 
style={tw`flex-row justify-between items-center px-10 ${id===selected?.id && "bg-gray-200"}`}
onPress={setSelected(item)}>
    <Image
style={{
    width: 100,
    height:100,
    resizeMode:"contain",
}}
source={{uri:image}}
/>
<View  style={tw`-ml-6`}>
    <Text  style={tw`text-xl font-semibold`}>{title}</Text>
    <Text>Travel Time</Text>
</View>
<Text style={tw`text-xl`}>$99</Text>
</TouchableOpacity>
)}
/>
<View>
    <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
    disabled={!selected}>
        <Text
        style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
    </TouchableOpacity>
</View>
</SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})