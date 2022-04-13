import React from 'react';
import {Badge, Box, HStack, Slider, Text, VStack} from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const PharmaciesCategoryCard = () => {
	return (
		<Box
			m="2"
			bg="gray.700"
			borderRadius="2xl"
			width="50%"
		>
			<VStack
				space="4"
				minH={40}
				p="2"
			>
				<HStack width="100%" display="flex" space={2} justifyContent="space-evenly">
					<Box width="35%" display="flex" justifyContent="center">
						<Box p="0" mx="2" bg="blue.400" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
							<FontAwesome5 name="hospital-symbol" size={26}/>
						</Box>
					</Box>
					<Box >
						<Text fontSize={23} fontWeight="bold">Pharmacies </Text>
						<Text >2 New </Text>
					</Box>
				</HStack>
				<VStack width="100%">
					<Text>Check, Contact and Search for pharmacies near you </Text>
					<Text fontSize={26} c fontWeight="bold"></Text>
				</VStack>
			</VStack>
		</Box>
	);
};

export default PharmaciesCategoryCard;
