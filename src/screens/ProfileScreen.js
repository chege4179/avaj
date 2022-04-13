import React, {useState} from 'react';
import {Avatar, Box, Button, HStack, Input, Switch, Text, VStack} from "native-base";
import {useDispatch, useSelector} from "react-redux";
import {SelectUser} from "../ReduxStore/UserReducer";
import {TouchableOpacity} from "react-native";
import {UserActions} from "../ReduxStore/UserConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ProfileScreen = () => {
	const user = useSelector(SelectUser)
	const [notificationOn,setNotificationsOn] = useState(true)
	const dispatch = useDispatch()
	const LogOutUser = () => {
		dispatch({
			type: UserActions.LOGOUT_SUCCESS,

		})
		AsyncStorage.removeItem("user", (err, data) => {
			if (err) {
				console.log(err)
			} else {
				console.log("Log Out successful")
			}
		})

	}
	return (
		<Box width="100%" height="100%" bg="black">
			<VStack width="100%" height="100%" display="flex" alignItems="center" p="4">
				<TouchableOpacity>
					<Avatar
						size="xl"
						bg="green.500"
						source={{
							uri: user.imageUrl
						}}/>
				</TouchableOpacity>
				<Text fontWeight="bold" mt={2} fontSize={35}>{user.name}</Text>
				<Text underline={true} mt={2} fontSize={19}>{user.email}</Text>
				<Text underline={true} mt={2} fontSize={19}>Change Password > </Text>
				<HStack
					display="flex"
					alignItems="center"
					justifyContent="space-evenly"
					mt={2}
					bg="gray.500"
					width="90%"
					height={16}
					borderRadius="2xl"
				>
					<Text>Turn On Notifications : { notificationOn ? "Off":"On" }</Text>
					<Switch size="lg" onChange={() => setNotificationsOn(!notificationOn)}  />
				</HStack>
				<HStack
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					mt={2}

					width="90%"
					height={16}
					borderRadius="2xl"
				>
					<Box bg="gray.500" p={4} height={16} display={"flex"} justifyContent="center" width="45%" borderRadius="2xl">
						<Text>Height</Text>
					</Box>
					<Box bg="gray.500"  width="45%" borderRadius="2xl" display={"flex"} justifyContent="center">
						<Input size="md"p={4} placeholder="Enter height" color="blue.900"  borderRadius="2xl" />
					</Box>

				</HStack>
				<HStack
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					mt={2}

					width="90%"
					height={16}
					borderRadius="2xl"
				>
					<Box bg="gray.500" p={4} height={16} display={"flex"} justifyContent="center" width="45%" borderRadius="2xl">
						<Text>BMI</Text>
					</Box>
					<Box bg="gray.500"  width="45%" borderRadius="2xl" display={"flex"} justifyContent="center">
						<Input size="md"p={4} placeholder="Enter BMI" color="blue.900"  borderRadius="2xl" />
					</Box>
				</HStack>
				<VStack

					space={2}
					width="100%"
					height={48}
					display="flex"
					alignItems="center"
					justifyContent="flex-end"
				>
					<Button width="90%" height={12} bg="primary.900" borderRadius="xl">
						Generate Health Data
					</Button>
					<Button onPress={LogOutUser} width="45%" height={12} bg="red.600" borderRadius="xl">
						Logout
					</Button>
				</VStack>
			</VStack>

		</Box>
	);
};

export default ProfileScreen;
