import React from 'react';
import {Badge, Box, HStack, Slider, Text, VStack} from "native-base";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const AccountCategoryCard = () => {
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
				<HStack width="100%">
					<Box p="0" mx="2" bg="green.400" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
						<FontAwesome name="money" size={25}/>
					</Box>
					<Box>
						<Text fontSize={26} c fontWeight="bold">Account </Text>
					</Box>
				</HStack>
				<VStack width="100%">
					<Text>Fund your account to start placing orders</Text>
					<Text fontSize={26} c fontWeight="bold"></Text>
				</VStack>
				<HStack width="100%" space={2}>

				</HStack>

			</VStack>
		</Box>
	);
};

export default AccountCategoryCard;
