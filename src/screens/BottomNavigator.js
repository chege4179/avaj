import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Screens from "../Screens";
import HomeScreen from "./HomeScreen";
import AddScreen from "./AddScreen";
import ProfileScreen from "./ProfileScreen";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import PrescriptionsScreen from "./PrescriptionsScreen";

const Tab = createMaterialBottomTabNavigator()
const BottomNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName={Screens.HOME_SCREEN}

			screenOptions={{
				tabBarLabel:null
			}}
			barStyle={{ backgroundColor: '#000' }}
		>
			<Tab.Screen
				name={Screens.HOME_SCREEN}
				component={HomeScreen}

				options={{


					tabBarIcon: () => {
						return (<Entypo name='home' size={25} color='white'/>)
					},
				}}
			/>
			<Tab.Screen name={Screens.ADD_SCREEN} component={AddScreen}
					  options={{
						  tabBarIcon: () => {
							  return (<Ionicons name='add-circle' size={25} color='white'/>)
						  },
					  }}
			/>
			<Tab.Screen name={Screens.PRESCRIPTIONS_SCREEN} component={PrescriptionsScreen}
					  options={{
						  tabBarIcon: () => {
							  return (<Entypo name='clipboard' size={25} color='white'/>)
						  },
					  }}/>
		</Tab.Navigator>
	);
};

export default BottomNavigator;
