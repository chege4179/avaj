import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const AddScreen = () => {
	return (
		<View style={styles.container}>
			<Text>AddScreen</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

	}
})
export default AddScreen;
