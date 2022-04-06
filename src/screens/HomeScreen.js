import React from 'react';

import {Box, Button, Text} from "native-base";
import {useDispatch, useSelector} from "react-redux";
import {SelectUser} from "../ReduxStore/UserReducer";
import {UserActions} from "../ReduxStore/UserConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
	const dispatch = useDispatch()
	const user = useSelector(SelectUser)
	const LogOutUser = () => {
		dispatch({
			type:UserActions.LOGOUT_SUCCESS,

		})
		AsyncStorage.removeItem("user",(err,data) => {
			if (err){
				console.log(err)
			}else {
				console.log("Log Out successful")
			}
		})

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
			<Text>Home Screen</Text>
			<Button onPress={LogOutUser}>Log Out</Button>

		</Box>
	);
};

export default HomeScreen;
