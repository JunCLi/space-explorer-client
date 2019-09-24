import React from 'react'

import { View, Text, TextInput } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { Formik } from 'formik'

import { useMutation } from 'react-apollo-hooks'
import { LOGIN } from '../../../gql/authQueries'

import { loginFormStyles } from '../../../stylesheets/authentication/authenticationStyles'

const LoginForm = () => {

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
					console.log(values)
					const result = await login[0]({
						variables: {input: {
							email: values.email,
							password: values.password,
						}}
					})

					console.log('result', result)
					if (result.data.login.message === 'success') {
						// props.history.push('/')
						// window.location.reload()
						console.log('successfully logged in')
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
						<View>
							<Input
								value={values.email}
								keyboardType='email-address'
								onChangeText={handleChange('email')}
								placeholder='Email'
								placeholderTextColor='white'
								editable={true}
								inputStyle={loginFormStyles.input}
								containerStyle={loginFormStyles.inputContainer}
								leftIcon={
									<Icon
										type='material'
										name='mail-outline'
										iconStyle={loginFormStyles.icon}
									/>
								}
								leftIconContainerStyle={{marginLeft: 0}}
							/>
						</View>
						<View>
							<Input
								value={values.password}
								onChangeText={handleChange('password')}
								placeholder='Password'
								placeholderTextColor='white'
								editable={true}
								inputStyle={loginFormStyles.input}
								containerStyle={loginFormStyles.inputContainer}
								leftIcon={
									<Icon
										type='material'
										name='lock-outline'
										iconStyle={loginFormStyles.icon}
									/>
								}
								leftIconContainerStyle={{marginLeft: 0}}
							/>
						</View>
						<View>
							<Button
								title='Login'
								buttonStyle={loginFormStyles.button}
								onPress={handleSubmit}
								disabled={!dirty || isSubmitting}
								disabledStyle={loginFormStyles.disabledButton}
								disabledTitleStyle={loginFormStyles.disabledButtonTitle}
							/>
						</View>
					</View>
				)
			}}

		</Formik>
	)
}

export default LoginForm