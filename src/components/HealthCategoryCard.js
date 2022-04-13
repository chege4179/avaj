import React from 'react';

import {  StyleSheet} from 'react-native';
import {Badge, Box, HStack, Slider, VStack,Text} from "native-base";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";

const HealthCategoryCard = () => {
	const [onChangeValue, setOnChangeValue] = React.useState(70);
	const [onChangeEndValue, setOnChangeEndValue] = React.useState(70)
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
					<Box p="0" mx="2" bg="yellow.400" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
						<MaterialCommunityIcon name="bucket" size={25}/>
					</Box>
					<Box>

					</Box>
				</HStack>
				<VStack width="100%">
					<Text>2 New </Text>
					<Text fontSize={26} c fontWeight="bold">Health Tips </Text>
				</VStack>
				<HStack width="100%" space={2}>
					<Box width="70%">
						<Slider
							defaultValue={Math.ceil((4/18) * 100)}
							colorScheme="yellow"
							onChange={(v) => {
								setOnChangeValue(Math.floor(v));}}
							onChangeEnd={v => {v && setOnChangeEndValue(Math.floor(v));}}
						>
							<Slider.Track>
								<Slider.FilledTrack />
							</Slider.Track>
						</Slider>
					</Box>
					<Box>
						<Badge bg="yellow.400" borderRadius="xl">
							<Text fontWeight="bold">4/18</Text>
						</Badge>
					</Box>
				</HStack>

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
export default HealthCategoryCard;
