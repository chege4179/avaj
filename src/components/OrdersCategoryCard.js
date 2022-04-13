import React from 'react';
import { Box, HStack,  Text, VStack} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const OrderCategoryCard = () => {
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
						<Box p="0" mx="2" bg="red.600" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
							<MaterialCommunityIcons name="truck" size={26}/>
						</Box>
					</Box>
					<Box display="flex" >
						<Text textAlign="left" fontSize={23} fontWeight="bold">Orders </Text>
						<Text textAlign="left" >2 New </Text>
					</Box>
				</HStack>
				<VStack width="100%">
					<Text>Order your prescriptions and have it delivered at your doorstep</Text>
					<Text fontSize={26} c fontWeight="bold"></Text>
				</VStack>

			</VStack>
		</Box>
	);
};

export default OrderCategoryCard;
