import React from 'react';
import {Box, HStack, Text, VStack} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const PharmacyCard = ({ color }) => {
	return (
		<Box bg="gray.600" my={2} width="100%" height={24} borderRadius="3xl" display="flex" justifyContent="center" >
			<HStack width="100%" justifyContent="center">
				<Box p={4} bg={color} borderRadius="2xl">
					<Ionicons name="home" size={35}/>
				</Box>
				<VStack width="70%" pl={4} >
					<Text fontSize={19} fontWeight="bold">I - MED Clinic</Text>
					<Text fontWeight="bold">Gate C</Text>
					<Text fontWeight="bold">Dr Kennedy J.O</Text>
				</VStack>
			</HStack>
		</Box>
	);
};

export default PharmacyCard;
