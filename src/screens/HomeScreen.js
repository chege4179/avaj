import React from 'react';

import {Avatar, Box, HStack, Icon, Input, Text, ScrollView, VStack} from "native-base";
import {useDispatch, useSelector} from "react-redux";
import {SelectUser} from "../ReduxStore/UserReducer";
import {UserActions} from "../ReduxStore/UserConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Screens from "../Screens";
import DoctorCategoryCard from "../components/DoctorCategoryCard";
import HealthCategoryCard from "../components/HealthCategoryCard";
import DiagnosticsCategoryCard from "../components/DiagnosticsCategoryCard";
import AccountCategoryCard from "../components/AccountCategoryCard";
import PharmaciesCategoryCard from "../components/PharmaciesCategoryCard";
import OrdersCategoryCard from "../components/OrdersCategoryCard";

const HomeScreen = () => {
	const navigation = useNavigation()
	const dispatch = useDispatch()
	const user = useSelector(SelectUser)

	const GoToProfileScreen = () => {
		navigation.navigate(Screens.PROFILE_SCREEN)
	}

	return (
		<ScrollView>
			<Box
				width="100%"
				height="100%"
				bg="black"
				display="flex"
				alignItems="center"
				padding={2}
			>
				<HStack
					space={2}
				>
					<Input
						placeholder="Search"
						width="88%"
						borderRadius="4"
						py="3"
						px="3"
						fontSize="14"
						InputRightElement={
							<Icon
								m="2"
								ml="3"
								size="6"
								color="gray.400"
								as={<MaterialIcons name="search"/>}
							/>
						}
					/>
					<TouchableOpacity onPress={GoToProfileScreen}>
						<Avatar
							bg="green.500"
							source={{
								uri: user.imageUrl
							}}/>
					</TouchableOpacity>

				</HStack>
				<VStack width="100%" display="flex" >
					<Text
						width="100%"
						padding={4}
						fontSize="4xl"
						textAlign="left"
						fontWeight="bold"

					>Hello {user.name}</Text>
					<Text
						width="40%"
						padding={5}
						textAlign="center"
						borderRadius="xl"
						bg="primary.900"
						my={5}
					>
						Categories
					</Text>
				</VStack>


				<HStack display="flex" space={4} justifyContent="space-evenly">
					<DoctorCategoryCard/>
					<HealthCategoryCard/>
				</HStack>
				<HStack display="flex" space={4} justifyContent="space-evenly">
					<DiagnosticsCategoryCard/>
					<AccountCategoryCard/>
				</HStack>
				<HStack display="flex" space={4} justifyContent="space-evenly">
					<PharmaciesCategoryCard/>
					<OrdersCategoryCard/>
				</HStack>
			</Box>
		</ScrollView>

	);
};

export default HomeScreen;
