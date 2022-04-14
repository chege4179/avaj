import React from 'react';
import {Avatar, Box, Button, HStack, Switch, Text, VStack} from "native-base";
import {useSelector} from "react-redux";
import {SelectUser} from "../ReduxStore/UserReducer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";


const AccountScreen = () => {
	const user = useSelector(SelectUser)
	const navigation = useNavigation()
	return (
		<Box width="100%" height="100%" bg="black">
			<VStack width="100%" height="100%" display="flex" alignItems="center" p="4">
				<Avatar
					size="xl"
					bg="green.500"
					source={{
						uri: user.imageUrl
					}}/>
				<Text fontSize={30} fontWeight="bold">{user.name}</Text>
				<Text fontSize={20} >Available Balance </Text>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-evenly"
					mt={2}
					bg="gray.500"
					width="50%"
					height={16}
					borderRadius={50}
				>
					<Text fontWeight="bold">KES 1500.00 /=</Text>
				</Box>
				<HStack mt="8" width="80%" display="flex" alignItems="center" justifyContent="space-around">
					<Box p="0" mx="2" bg="red.600" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
						<MaterialCommunityIcons name="truck" size={26}/>
					</Box>
					<Box  width="80%">
						<Text fontWeight="bold" pl={4}>Proceed to Order</Text>
					</Box>

				</HStack>
				<HStack mt="4" width="80%" display="flex" alignItems="center" justifyContent="space-around">
					<Box p="0" mx="2" bg="blue.600" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
						<AntDesign name="shoppingcart" size={26}/>
					</Box>
					<Box  width="80%">
						<Text fontWeight="bold" pl={4}>Proceed to Check Out</Text>
					</Box>

				</HStack>
				<HStack mt="4" width="80%" display="flex" alignItems="center" justifyContent="space-around">
					<Box p="0" mx="2" bg="green.600" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
						<FontAwesome5 name="money-bill-wave" size={26}/>
					</Box>
					<Box  width="80%">
						<Text fontWeight="bold" pl={4}>Proceed to Check Out</Text>
					</Box>

				</HStack>
				<HStack mt="4" width="80%" display="flex" alignItems="center" justifyContent="space-around">
					<Box p="0" mx="2" bg="yellow.600" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
						<Entypo name="wallet" size={26}/>
					</Box>
					<Box  width="80%">
						<Text fontWeight="bold" pl={4}>Proceed to Check Out</Text>
					</Box>

				</HStack>
				<VStack
					space={2}
					width="100%"
					height={24}
					display="flex"
					alignItems="center"
					justifyContent="flex-end"
				>

					<Button onPress={() => navigation.goBack()} width="45%" height={12} bg="red.700" borderRadius="2xl">
						Back
					</Button>
				</VStack>
			</VStack>

		</Box>
	);
};

export default AccountScreen;
