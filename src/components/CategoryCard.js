import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Box, Divider, VStack} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CategoryCard = () => {
	return (
		<Box
			border="1"
			borderRadius="md"
			width="50%"
			borderWidth={2}
			borderColor="white"
		>
			<VStack
				space="4"
				minH={40}
				divider={<Divider />}
			>

				<Box px="4" pt="4">
					<FontAwesome name="user" size={25}/>
				</Box>


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
export default CategoryCard;
