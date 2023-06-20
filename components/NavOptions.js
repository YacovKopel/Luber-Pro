import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const data=[{
    id:1,
    title: "Get A Ride with Uber",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"
},
{   id:2,
    title: "Get A Ride with Lyft",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"
}]


const NavOptions = () => {
const origin =useSelector(selectOrigin)
 const navigation = useNavigation();

  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item})=>
<TouchableOpacity
style={[
  tw `p-2 pl-6 pb-8 pt-4 m-2 w-40`,
  item.id === 1 ? tw `bg-gray-200` : tw `bg-pink-500`
]}
disabled={!origin}
onPress={()=> navigation.navigate(item.screen)}>
      <View 
    style= {tw `${!origin && "opacity-20"}`}>
        <Image
        style={{width:120, height:120, resizeMode: "contain"}}
        source = {{uri: item.image}}/>
        <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
        <Icon
        style={tw `p-2 bg-black rounded-full w-10 mt-4`}
        name='arrow-right' color="white" type='font-awesome'/>

</View>
</TouchableOpacity>}/>
  )
}

export default NavOptions
