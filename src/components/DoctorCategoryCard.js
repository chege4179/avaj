import React from 'react';

import { StyleSheet} from 'react-native';
import {Box, Divider, VStack, Text, Slider, HStack, Badge} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const DoctorCategoryCard = () => {
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
					<Box p="0" mx="2" bg="blue.200" borderRadius="2xl" width={12} height={12} display="flex" justifyContent="center" alignItems="center">
						<FontAwesome name="user" size={25}/>
					</Box>
					<Box>

					</Box>
				</HStack>
				<Box width="100%">
					<Text>5 New </Text>
					<Text fontSize={26} fontWeight="bold">Doctors </Text>
				</Box>
				<HStack width="100%" space={2}>
					<Box width="70%">
						<Slider
							defaultValue={Math.ceil((9/24) * 100)}
							colorScheme="blue"
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
						<Badge bg="blue.800" borderRadius="xl">
							<Text fontWeight="bold">9/24</Text>
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
export default DoctorCategoryCard;
