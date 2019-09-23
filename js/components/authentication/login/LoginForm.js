import React from 'react'

import { View, Text, TextInput } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { Formik } from 'formik'

import { loginFormStyles } from '../../../stylesheets/authentication/authenticationStyles'

const LoginForm = () => {

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
				} catch(err) {
					throw err
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
					</View>
				)
			}}

		</Formik>
	)
}

export default LoginForm