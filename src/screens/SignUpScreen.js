import React from 'react';

import {Box, Button, Checkbox, HStack, Input, Text, VStack} from "native-base";

const SignUpScreen = () => {
	return (
		<Box
			width="100%"
			height="100%"
			bg="black"
			padding={5}
		>
			<VStack

				width="100%"
				height="100%"
			>
				<Text fontSize="2xl" paddingBottom={3}>Sign Up</Text>
				<Input
					size="2xl"
					placeholder="Email Address"
					marginBottom={3}
				/>
				<Input
					size="2xl"
					placeholder="Phone Number"
					marginBottom={3}
				/>
				<Input
					size="2xl"
					placeholder="Name"
					marginBottom={3}
				/>
				<HStack
					space={6}
					// borderWidth={2}
					// borderColor="white"
					height={12}
					justifyContent="space-evenly"
					display="flex"
					alignItems="center"
				>
					<Text>Gender</Text>
					<Checkbox
						value="test"
						accessibilityLabel="This is a dummy checkbox"
						_text={{
							color:"white"
						}}
					>
						Male
					</Checkbox>
					<Checkbox value="test" accessibilityLabel="This is a dummy checkbox">
						Female
					</Checkbox>
				</HStack>
				<Input
					size="2xl"
					placeholder="ID Number"
					marginBottom={3}
				/>
				<Input
					size="2xl"
					placeholder="Password"
					marginBottom={3}
				/>
				<Input
					size="2xl"
					placeholder="Confirm Password"
					marginBottom={3}
				/>
				<HStack
					space={6}
					// borderWidth={2}
					// borderColor="white"
					height={12}
					justifyContent="space-evenly"
					display="flex"
					alignItems="center"
				>

					<Checkbox
						value="test"
						accessibilityLabel="This is a dummy checkbox"

					/>

					<Text >By clicking you agree to the Terms and Conditions of iDOC </Text>

				</HStack>
				<Button
					marginTop="4"
					bg="primary.900"
					height={16}
					borderRadius="3xl"

					_text={{
						fontSize:"xl"
					}}
				>
					Sign Up
				</Button>
			</VStack>

		</Box>
	);
};

export default SignUpScreen;
