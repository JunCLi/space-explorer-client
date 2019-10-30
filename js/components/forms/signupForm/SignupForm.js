import React from 'react'

import { View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { SIGNUP } from '../../../gql/authQueries'

import { signupFormStyles } from '../../../stylesheets/authentication/formStyles'
import { styles } from './styles'

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
					<View style={styles.mainContainer}>
						<View style={styles.inputViewContainer}>
							<Input
								value={values.email}
								keyboardType='email-address'
								onChangeText={handleChange('email')}
								placeholder='Email'
								placeholderTextColor='white'
								editable={true}
								autoCompleteType='email'
								inputStyle={styles.inputWithIcon}
								containerStyle={styles.inputContainer}
								leftIcon={
									<Icon
										type='material'
										name='mail-outline'
										iconStyle={styles.icon}
									/>
								}
								leftIconContainerStyle={styles.leftIconContainer}
							/>
						</View>
						<View style={styles.inputViewContainer}>
							<Input
								value={values.password}
								onChangeText={handleChange('password')}
								placeholder='Password'
								placeholderTextColor='white'
								editable={true}
								autoCompleteType='password'
								secureTextEntry={true}
								inputStyle={styles.inputWithIcon}
								containerStyle={styles.inputContainer}
								leftIcon={
									<Icon
										type='material'
										name='lock-outline'
										iconStyle={styles.icon}
									/>
								}
								leftIconContainerStyle={styles.leftIconContainer}
							/>
						</View>
						<View style={styles.inputViewContainer}>
							<Input
								value={values.confirmPassword}
								onChangeText={handleChange('confirmPassword')}
								placeholder='Confirm Password'
								placeholderTextColor='white'
								editable={true}
								autoCompleteType='password'
								secureTextEntry={true}
								inputStyle={styles.inputWithIcon}
								containerStyle={styles.inputContainer}
								leftIcon={
									<Icon
										type='material'
										name='lock'
										iconStyle={styles.icon}
									/>
								}
								leftIconContainerStyle={styles.leftIconContainer}
							/>
						</View>
						<View style={styles.inputViewDoubleContainer}>
							<Input
								value={values.firstName}
								onChangeText={handleChange('firstName')}
								placeholder='First Name'
								placeholderTextColor='white'
								editable={true}
								inputStyle={styles.doubleInput}
								containerStyle={styles.doubleInputContainer}
							/>
							<Input
								value={values.lastName}
								onChangeText={handleChange('lastName')}
								placeholder='Last Name'
								placeholderTextColor='white'
								editable={true}
								inputStyle={styles.doubleInput}
								containerStyle={styles.doubleInputContainer}
							/>
						</View>

						<View>
							<Button
								title='Signup'
								buttonStyle={styles.button}
								onPress={handleSubmit}
								disabled={!dirty || isSubmitting}
								disabledStyle={styles.disabledButton}
								disabledTitleStyle={styles.disabledButtonTitle}
							/>
						</View>
					</View>
				)
			}}
		</Formik>
	)
}

export default SignupForm