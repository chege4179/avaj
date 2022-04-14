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
import {useDispatch, useSelector} from "react-redux";
import {SelectUser} from "./ReduxStore/UserReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserActions} from "./ReduxStore/UserConstants";
import HomeScreen from "./screens/HomeScreen";
import BottomNavigator from "./screens/BottomNavigator";
import ProfileScreen from "./screens/ProfileScreen";
import AccountScreen from "./screens/AccountScreen";
import AllPharmaciesScreen from "./screens/AllPharmaciesScreen";

const Stack = createNativeStackNavigator()

const MainApp = () => {
	const user = useSelector(SelectUser)
	const [isVisible, setIsVisible] = useState(true)
	const dispatch = useDispatch()

	function getSavedUserData() {
		AsyncStorage.getItem("user", (err, data) => {
			if (err) {

			} else {
				const user = JSON.parse(data)
				dispatch({
					type: UserActions.LOGIN_SUCCESS,
					payload: user
				})
			}
		})
	}

	useLayoutEffect(() => {
		getSavedUserData()
		setTimeout(() => {
			setIsVisible(false)
		}, 2500)
		return () => {
			setIsVisible(true)
		}
	}, [])
	return (
		<NavigationContainer>
			{
				isVisible ? (<SplashScreen/>) :
					(
						<Stack.Navigator>
							{
								user === null ? (
									<>
										<Stack.Screen name={Screens.WELCOME_SCREEN} component={WelcomeScreen}
												    options={{
													    headerShown: false
												    }}/>
										<Stack.Screen name={Screens.LOGIN_SCREEN} component={LoginScreen}
												    options={{
													    headerShown: false
												    }}/>
										<Stack.Screen name={Screens.SIGN_UP_SCREEN} component={SignUpScreen}
												    options={{
													    headerShown: false
												    }}/>
									</>
								) : (
									<>
										<Stack.Screen name={Screens.HOME_STACK} component={BottomNavigator}
												    options={{
													    headerShown: false
												    }}/>
										<Stack.Screen name={Screens.PROFILE_SCREEN} component={ProfileScreen}
												    options={{
													    headerShown: false
												    }}/>
										<Stack.Screen name={Screens.ACCOUNT_SCREEN} component={AccountScreen}
												    options={{
													    headerShown: false
												    }}/>
										<Stack.Screen name={Screens.ALL_PHARMACIES_SCREEN} component={AllPharmaciesScreen}
												    options={{
													    headerShown: false
												    }}/>
									</>


								)
							}
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
