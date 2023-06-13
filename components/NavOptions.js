import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
// import { Icon, SocialIcon } from '@rneui/themed'
import { Icon } from 'react-native-elements'

const data=[{
    id:1,
    title: "Get A Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"
},
{   id:2,
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen"
}]


const NavOptions = () => {
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item})=>
<TouchableOpacity
style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
    <View>
        <Image
        style={{width:120, height:120, resizeMode: "contain"}}
        source = {{uri: item.image}}/>
        <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
        {/* <SocialIcon name='arrow-right' color ="black" type ="font-awesome"/> */}
        <Icon
        style={tw `p-2 bg-black rounded-full w-10 mt-4`}
        name='arrow-right' color="white" type='font-awesome'/>

</View>
</TouchableOpacity>}/>
  )
}

export default NavOptions
