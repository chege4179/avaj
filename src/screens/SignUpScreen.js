import React, {useEffect, useState} from 'react';

import {Box, Button, Checkbox, HStack, Icon, Input, KeyboardAvoidingView, Text, VStack} from "native-base";
import {useForm, Controller} from "react-hook-form";
import {ActivityIndicator, Keyboard, Platform,StyleSheet} from "react-native";
import AlertBox from "../components/AlertBox";
import BaseURL from "../util/BaseURL";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SignUpScreen = () => {
	const [isTermsAccepted,setIsTermsAccepted] = useState(false)
	const [gender,setGender] = useState("")
	const [isMsg,setIsMsg] = useState(false)
	const [isLoading,setIsLoading] = useState(false)
	const [show, setShow] = useState(false);
	const [response,setResponse] = useState({
		status:"success",
		msg:"Login success"
	})
	const onCloseAlertBox = () => {
		setIsMsg(false)
	}


	const {control, handleSubmit, formState: {errors}} = useForm({
		defaultValues: {
			email: '',
			phoneNumber: '',
			name: "",
			password: "",
			confirmPassword: "",
		}
	});
	function removeAlertBox(){
		setTimeout(() => {
			setIsMsg(false)
			setResponse({})
		},2500)
	}
	const onSubmit = async (data) => {
		Keyboard.dismiss()
		setIsLoading(true)
		if (data.password !==data.confirmPassword){
			setResponse({ status: "error",msg:"Passwords do not match" })
			setTimeout(() => {
				setIsMsg(false)
			},2500)
		}else {
			try {
				const apiresponse = await fetch(`${BaseURL}/user/signup`,{
					method:"POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ ...data,gender })
				})
				const res = await apiresponse.json()
				setIsLoading(false)
				if (res.success){
					setResponse({ status: "success",msg: res.msg })
					setIsMsg(true)
					removeAlertBox()
				}else {
					setResponse({ status: "error",msg: res.msg })
					setIsMsg(true)
					removeAlertBox()
				}
			}catch (e){
				setIsLoading(false)
				setResponse({ status: "error",msg: e.message })
				setIsMsg(true)
				removeAlertBox()
			}
		}

	}
	return (

		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			width="100%" height="100%"
			bg="black" display="flex"
			alignItems="center" justifyContent="center"
		>

			<VStack
				display="flex"
				alignItems="center"
				justifyContent="center"

				space={4}
				width="100%"
				height="100%"
				padding={5}
			>
				{
					isMsg && (
						<AlertBox status={response} onClose={onCloseAlertBox}/>
					)
				}

				<Text fontSize="2xl" paddingBottom={3}>Sign Up</Text>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<Input
							onBlur={onBlur}
							value={value}
							onChangeText={onChange}
							size="xl"
							width="100%"
							placeholder="Email Address"

						/>
					)}
					name="email"
				/>
				{errors.email && (<Text color="red.500">Email Address is required</Text>)}
				<Controller
					control={control}
					rules={{
						maxLength: 100,
						required: true,

					}}
					render={({field: {onChange, onBlur, value}}) => (
						<Input
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							size="xl"
							width="100%"
							placeholder="Phone Number"

						/>
					)}
					name="phoneNumber"
				/>
				{errors.phoneNumber && (<Text color="red.500">Phone Number is required</Text>)}
				<Controller
					control={control}
					rules={{
						maxLength: 100,
						required: true
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							size="xl"
							width="100%"
							placeholder="Name"

						/>
					)}
					name="name"
				/>
				{errors.name && (<Text color="red.500">Your name is required</Text>)}
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

						value={gender === "Male"}
						accessibilityLabel="This is a dummy checkbox"
						_text={{
							color: "white"
						}}
						onChange={() => setGender("Male")}
						isChecked={gender === "Male"}

					>
						Male
					</Checkbox>
					<Checkbox
						_text={{
							color: "white"
						}}
						accessibilityLabel="Female"
						onChange={() => setGender("Female")}
						isChecked={gender === "Female"}
						value={gender === "Female"}
					>
						Female
					</Checkbox>
				</HStack>
				<Controller
					control={control}
					rules={{
						maxLength: 100,
						required: true
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<Input
							onChangeText={onChange}
							onBlur={onBlur}
							value={value}
							size="xl"
							width="100%"
							placeholder="Password"

							type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />}
						/>
					)}
					name="password"
				/>
				{errors.password && (<Text color="red.500">Your password is required</Text>)}
				<Controller
					control={control}
					rules={{
						maxLength: 100,
						required: true
					}}
					render={({field: {onChange, onBlur, value}}) => (
						<Input
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							size="xl"
							placeholder="Confirm Password"
							type={show ? "text" : "password"}
							InputRightElement={
							<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
								 size={5}
								 mr="2" color="muted.400"
								 onPress={() => setShow(!show)}
							/>}
						/>
					)}
					name="confirmPassword"
				/>
				{errors.confirmPassword && (<Text color="red.500">Confirm your Password</Text>)}
				<HStack
					space={6}
					height={12}
					justifyContent="space-evenly"
					display="flex"
					alignItems="center"
				>
					<Checkbox
						isChecked={isTermsAccepted}
						accessibilityLabel="Terms and Conditions"
					 	value={isTermsAccepted}
						onChange={() =>setIsTermsAccepted(!isTermsAccepted)}
					/>

					<Text>By clicking you agree to the Terms and Conditions of iDOC </Text>

				</HStack>


				<Button
					disabled={!isTermsAccepted}
					marginTop="4"
					bg="primary.900"
					size="xl"
					width="100%"
					height={16}
					borderRadius="3xl"
					onPress={handleSubmit(onSubmit)}

					_text={{
						fontSize: "xl"
					}}
				>
					Sign Up
				</Button>
				<ActivityIndicator animating={isLoading} style={styles.loading} color="#6366F1" size={50}/>
			</VStack>

		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	loading:{
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
export default SignUpScreen;
