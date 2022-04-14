import React from 'react';
import {Box, ScrollView, Text, VStack,FlatList} from "native-base";
import PharmacyCard from "../components/PharmacyCard";
import {getRandomColor} from "../util/util";

const AllPharmaciesScreen = () => {
	const myArr = [1,9,5,6,7,8,6,4,3,6,8,9]
	return (
		<ScrollView>
			<Box width="100%" height="100%" bg="black">
				<VStack space={2} display="flex" alignItems="center" mt="4">
					<Text fontSize={30} fontWeight="bold">Pharmacies</Text>
					<Box width="100%" borderWidth={2} borderColor="white" height={40}>

					</Box>
					<FlatList
						height="100%"
						data={myArr}
						keyExtractor={({item}) => item}
						renderItem={(item) => {

							return(<PharmacyCard key={item.index} color={getRandomColor()}/>)
						}}
					/>


				</VStack>
			</Box>
		</ScrollView>

	);
};

export default AllPharmaciesScreen;
