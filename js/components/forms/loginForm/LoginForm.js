import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { LOGIN } from '../../../gql/authQueries'
import { styles } from './styles'

const LoginForm = props => {
	const login = useMutation(LOGIN)

	const initialFormValues = {
		email: '',
		password: '',
	}

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					const result = await login[0]({
						variables: {input: {
							email: values.email,
							password: values.password,
						}}
					})
					if (result.data.login.message === 'success') {
						props.navigation.navigate('AuthLoading', {
							user: result.data.login.user
						})
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
								leftIconContainerStyle={{marginLeft: 0}}
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
								leftIconContainerStyle={{marginLeft: 0}}
							/>
						</View>

						<View>
							<Button
								title='Login'
								buttonStyle={styles.button}
								onPress={handleSubmit}
								disabled={!dirty || isSubmitting}
								disabledStyle={styles.disabledButton}
								disabledTitleStyle={styles.disabledButtonTitle}
							/>
						</View>

						<TouchableOpacity>
							<Text style={styles.forgotPassword}>Forgot your password?</Text>
						</TouchableOpacity>
					</View>
				)
			}}

		</Formik>
	)
}

export default LoginForm