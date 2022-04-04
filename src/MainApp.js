import React, {useLayoutEffect, useState} from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {NativeBaseProvider} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import Screens from "./Screens";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SplashScreen from "./screens/SplashScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator()

const MainApp = () => {
	const [isVisible,setIsVisible] = useState(true)
	useLayoutEffect(() => {
		setTimeout(() => {
			setIsVisible(false)
		},2500)
		return () => {

		}
	},[])
	return (
		<NavigationContainer>
			{
				isVisible ? (<SplashScreen/>):
					(
					<Stack.Navigator initialRouteName={Screens.WELCOME_SCREEN}>
						<Stack.Screen name={Screens.LOGIN_SCREEN} component={LoginScreen}  options={{
							headerShown:false
						}} />
						<Stack.Screen name={Screens.SIGN_UP_SCREEN} component={SignUpScreen}options={{
							headerShown:false
						}} />
						<Stack.Screen name={Screens.WELCOME_SCREEN} component={WelcomeScreen} options={{
							headerShown:false
						}} />
					</Stack.Navigator>
				)
			}
		</NavigationContainer>

	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

	}
})
export default MainApp;
