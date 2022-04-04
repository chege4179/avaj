import React, {useLayoutEffect, useState} from 'react';

import {extendTheme, NativeBaseProvider} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SplashScreen from "./src/screens/SplashScreen";
import Screens from "./src/Screens";
import {Provider} from "react-redux";
import store from "./src/ReduxStore/Store";
import MainApp from "./src/MainApp";



const App = () => {
	const theme = extendTheme({
		colors: {
			// Add new color
			primary: {
				50: '#E3F2F9',
				100: '#C5E4F3',
				200: '#A2D4EC',
				300: '#7AC1E4',
				400: '#47A9DA',
				500: '#0088CC',
				600: '#007AB8',
				700: '#006BA1',
				800: '#005885',
				900: '#6366F1',
			},
			// Redefinig only one shade, rest of the color will remain same.
			amber: {
				400: '#d97706',
			},
		},
		config: {
			// Changing initialColorMode to 'dark'
			initialColorMode: 'dark',
		},
	});

	return (
		<Provider store={store}>
			<NativeBaseProvider theme={theme}>
				<MainApp/>
			</NativeBaseProvider>
		</Provider>

	);
};

export default App;
