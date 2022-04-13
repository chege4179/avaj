import React from 'react';

import {StyleSheet} from 'react-native';
import {Box, Button, Text, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import Screens from "../Screens";

const WelcomeScreen = () => {

	const navigation = useNavigation()
	const GoToLoginScreen = () => {
		navigation.navigate(Screens.LOGIN_SCREEN)
	}
	const GoToSignUpScreen = () => {
		navigation.navigate(Screens.SIGN_UP_SCREEN)
	}
	return (
		<Box
			width="100%"
			height="100%"
			bg="black"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Text
				color="primary.900"
				fontSize="6xl"
			>iDOC</Text>
			<Text
				color="primary.900"
				fontSize="3xl"
			>Welcome to iDOC</Text>
			<VStack
				width="100%"
				space="sm"
				padding={10}
			>
				<Button
					bg="primary.900"
					height={16}
					borderRadius="3xl"
					onPress={GoToLoginScreen}
					_text={{
						fontSize:"xl"
					}}
				>
					Login
				</Button>
				<Button
					bg="primary.900"
					height={16}
					borderRadius="3xl"
					onPress={GoToSignUpScreen}
					_text={{
						fontSize:"xl"
					}}
				>
					Sign Up
				</Button>
			</VStack>


		</Box>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

	}
})
export default WelcomeScreen;
