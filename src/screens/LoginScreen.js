import React, {useEffect, useState} from 'react';
import {Box, Button, Icon, Input, KeyboardAvoidingView, Text, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import Screens from "../Screens";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {ActivityIndicator, Platform, StyleSheet} from "react-native";
import {Controller, useForm} from "react-hook-form";
import BaseURL from "../util/BaseURL";
import AlertBox from "../components/AlertBox";
import {useDispatch} from "react-redux";
import {UserActions} from "../ReduxStore/UserConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
	const navigation = useNavigation()
	const dispatch  = useDispatch()
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading,setIsLoading] = useState(false)
	const [isMsg,setIsMsg] = useState(false)
	const [response,setResponse] = useState({
		status:"success",
		msg:"Login success"
	})
	const {control, handleSubmit, formState: {errors}} = useForm({
		defaultValues: {
			email: '',
			password: "",
		}
	});

	useEffect(() => {
		return () => {
			setIsMsg(false)
			setResponse({})

		};
	}, []);

	const onCloseAlertBox = () => {
		setIsMsg(false)
	}
	function removeAlertBox(){
		setTimeout(() => {
			setIsMsg(false)
			setResponse({})
		},2500)
	}

	const LoginUser = async (data) => {
		try {
			setIsLoading(true)
			console.log("data",data)
			const apiresponse = await fetch(`${BaseURL}/user/login`,{
				method:"POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			const res = await apiresponse.json()
			setIsLoading(false)
			if (res.success){
				setResponse({ status: "success",msg: res.msg })
				setIsMsg(true)
				console.log(res.user)
				removeAlertBox()
				dispatch({
					type:UserActions.LOGIN_SUCCESS,
					payload:res.user
				})
				await AsyncStorage.setItem("user", JSON.stringify(res.user))
			}else {
				setResponse({ status: "error",msg: res.msg })
				setIsMsg(true)
				removeAlertBox()
			}
		}catch (e){
			console.log("Client error",e)
			setIsLoading(false)
			setResponse({ status: "error",msg: e.message })
			setIsMsg(true)
			removeAlertBox()
		}
	}
	const GoToSignUpScreen = () => {
		navigation.navigate(Screens.SIGN_UP_SCREEN)
	}
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			width="100%"
			height="100%"
			bg="black"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<VStack
				display="flex"
				alignItems="center"
				justifyContent="center"

				space={2}
				width="100%"
				height="100%"
				padding={5}
			>
				{
					isMsg && (
						<AlertBox status={response} onClose={onCloseAlertBox}/>
					)
				}
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

							type={showPassword ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShowPassword(!showPassword)} />}
						/>
					)}
					name="password"
				/>
				{errors.password && (<Text color="red.500">Your password is required</Text>)}

				<Text width="100%">Forgot Your Password ?</Text>
				<Button
					width="100%"
					marginTop="4"
					bg="primary.900"
					height={12}
					borderRadius="3xl"
					onPress={handleSubmit(LoginUser)}

					_text={{
						fontSize: "xl"
					}}
				>
					Log In
				</Button>
				<Text width="100%" textAlign="center">Or</Text>
				<Button
					width="100%"
					onPress={GoToSignUpScreen}

					bg="primary.900"
					height={12}
					borderRadius="3xl"

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
export default LoginScreen;
