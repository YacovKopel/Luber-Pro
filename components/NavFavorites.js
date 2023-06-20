import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import Geolocation from 'react-native-geolocation-service';


const data =[
    {
        id: "123",
        icon:"home",
        location: "Home",
        destination: "5321 Tyrone Ave. Sherman Oaks, CA",
    },{
        id: "456",
        icon:"briefcase",
        location: "Work",
        destination: "16133 Ventura Blvd. Encino, CA",
    },
    {
        id: "789",
        icon:"pin",
        location: "Current Location",
        destination: "",
    }
]

const NavFavorites = () => {
    const [location, setLocation] = useState(false);

    // Function to get permission for location
const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

   // function to check permissions and get Location
   const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };

  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={()=>{
        <View style={[tw`bg-gray-200`, {height:0.5}]}></View>
    }}
    renderItem={({item:{ location, destination, icon} })=> (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
            style={tw `mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type='ionicon'
            color='white'
            size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    ) }
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { FlatList } from 'react-native';
// import { TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-elements';
// import tw from 'tailwind-react-native-classnames';
// import Geolocation from 'react-native-geolocation-service';

// const data = [
//   {
//     id: '123',
//     icon: 'home',
//     location: 'Home',
//     destination: 'Code Street, London, UK',
//   },
//   {
//     id: '456',
//     icon: 'briefcase',
//     location: 'Work',
//     destination: 'London Eye, London, UK',
//   },
//   {
//     id: '789',
//     icon: 'pin',
//     location: 'Current Location',
//     destination: '',
//   },
// ];

// const NavFavorites = ({ onFavoritePress }) => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     getLocation();
//   }, []);

//   const requestLocationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Geolocation Permission',
//           message: 'Can we access your location?',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       console.log('granted', granted);
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use Geolocation');
//         return true;
//       } else {
//         console.log('You cannot use Geolocation');
//         return false;
//       }
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   const getLocation = () => {
//     const result = requestLocationPermission();
//     result.then(res => {
//       console.log('res is:', res);
//       if (res) {
//         {
//             Geolocation.getCurrentPosition(
//               position => {
//                 const { latitude, longitude } = position.coords
//                 setLocation({ latitude, longitude })
//               },
//               error => {
//                 console.log(error.code, error.message)
//               },
//               { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//             )
//           }
//       }
//     });
//   };

//   const handleFavoritePress = () => {
//     if (location) {
//       const { latitude, longitude } = location.coords;
//       const destination = `${latitude},${longitude}`;
//       console.log('Current Location:', destination);
//       onFavoritePress(destination);
//     }
//   };

//   return (
//     <FlatList
//       data={data}
//       keyExtractor={item => item.id}
//       ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, { height: 0.5 }]}></View>}
//       renderItem={({ item: { location, destination, icon } }) => (
//         <TouchableOpacity style={tw`flex-row items-center p-5`} onPress={handleFavoritePress}>
//           <Icon
//             style={tw`mr-4 rounded-full bg-gray-300 p-3`}
//             name={icon}
//             type="ionicon"
//             color="white"
//             size={18}
//           />
//           <View>
//             <Text style={tw`font-semibold text-lg`}>{location}</Text>
//             <Text style={tw`text-gray-500`}>{destination}</Text>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

// export default NavFavorites;

// const styles = StyleSheet.create({});
