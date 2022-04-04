import React from 'react';

import { StyleSheet} from 'react-native';
import {Box, Text} from "native-base";

const SplashScreen = () => {
	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100%"
			bg="black"
			_text={{
				fontSize: "5xl",
				fontWeight: "medium",
				color: "primary.900",
				letterSpacing: "lg"
		}}>
			iDOC
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
export default SplashScreen;
