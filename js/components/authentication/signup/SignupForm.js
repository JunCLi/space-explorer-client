import React from 'react'

import { View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { SIGNUP } from '../../../gql/authQueries'

import { signupFormStyles } from '../../../stylesheets/authentication/formStyles'

const SignupForm = props => {
	const signup = useMutation(SIGNUP)

	const initialFormValues = {
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
	}

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const result = await signup[0]({
						variables: {input: {
							email: values.email,
							password: values.password,
							firstName: values.firstName,
							lastName: values.lastName,
						}}
					})
					if (result.data.signup.message === 'success') {
						props.navigation.navigate('SuccessfulSignup')
					}
				} catch(err) {
					throw err
				} finally {
					setSubmitting(false)
				}
			}}
		> 
			{formikProps => {
				const {
					values,
					touched,
					errors,
					dirty,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
					handleReset,
					setFieldValue,
				} = formikProps

				return (
					<View>
						<View style={signupFormStyles.inputViewContainer}>
							<Input
								value={values.email}
								keyboardType='email-address'
								onChangeText={handleChange('email')}
								placeholder='Email'
								placeholderTextColor='white'
								editable={true}
								inputStyle={signupFormStyles.inputWithIcon}
								containerStyle={signupFormStyles.inputContainer}
								leftIcon={
									<Icon
										type='material'
										name='mail-outline'
										iconStyle={signupFormStyles.icon}
									/>
								}
								leftIconContainerStyle={signupFormStyles.leftIconContainer}
							/>
						</View>
						<View style={signupFormStyles.inputViewContainer}>
							<Input
								value={values.password}
								onChangeText={handleChange('password')}
								placeholder='Password'
								placeholderTextColor='white'
								editable={true}
								inputStyle={signupFormStyles.inputWithIcon}
								containerStyle={signupFormStyles.inputContainer}
								leftIcon={
									<Icon
										type='material'
										name='lock-outline'
										iconStyle={signupFormStyles.icon}
									/>
								}
								leftIconContainerStyle={signupFormStyles.leftIconContainer}
							/>
						</View>
						<View style={signupFormStyles.inputViewContainer}>
							<Input
								value={values.confirmPassword}
								onChangeText={handleChange('confirmPassword')}
								placeholder='Confirm Password'
								placeholderTextColor='white'
								editable={true}
								inputStyle={signupFormStyles.inputWithIcon}
								containerStyle={signupFormStyles.inputContainer}
								leftIcon={
									<Icon
										type='material'
										name='lock'
										iconStyle={signupFormStyles.icon}
									/>
								}
								leftIconContainerStyle={signupFormStyles.leftIconContainer}
							/>
						</View>
						<View style={signupFormStyles.inputViewDoubleContainer}>
							<Input
								value={values.firstName}
								onChangeText={handleChange('firstName')}
								placeholder='First Name'
								placeholderTextColor='white'
								editable={true}
								inputStyle={signupFormStyles.doubleInput}
								containerStyle={signupFormStyles.doubleInputContainer}
							/>
							<Input
								value={values.lastName}
								onChangeText={handleChange('lastName')}
								placeholder='Last Name'
								placeholderTextColor='white'
								editable={true}
								inputStyle={signupFormStyles.doubleInput}
								containerStyle={signupFormStyles.doubleInputContainer}
							/>
						</View>

						<View>
							<Button
								title='Signup'
								buttonStyle={signupFormStyles.button}
								onPress={handleSubmit}
								disabled={!dirty || isSubmitting}
								disabledStyle={signupFormStyles.disabledButton}
								disabledTitleStyle={signupFormStyles.disabledButtonTitle}
							/>
						</View>
					</View>
				)
			}}
		</Formik>
	)
}

export default SignupForm