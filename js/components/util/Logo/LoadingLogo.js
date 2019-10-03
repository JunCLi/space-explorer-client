// import React, { useEffect, useState } from 'react'

// import { Animated, StyleSheet, Text, View } from 'react-native'

// import { backgroundPurple } from '../../../stylesheets/colours'

// const LoadingLogo = props => {
// 	const { size = 100 } = props

// 	const [fadeAnim] = useState(new Animated.Value(0))

// 	React.useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 10000,
//       }
//     ).start();
//   }, [])

// 	const logoStyles = StyleSheet.create({
// 		background: {
// 			position: 'relative',
// 			justifyContent: 'center',
// 			alignItems: 'center',
// 			alignSelf: 'center',

// 			width: size + size / 3,
// 			height: size + size / 3,
// 			borderWidth: size / 30,
// 			borderColor: 'white',
// 			borderRadius: 1000,
// 		},
		
// 		logo: {
// 			color: 'white',
// 			fontSize: size,
// 		},

// 		orb: {
// 			position: 'absolute',
// 			top: size / 3,
// 			right: - size / 35 ,

// 			width: size / 8,
// 			height: size / 8,
// 			borderRadius: 1000,
// 			backgroundColor: 'white',
// 		},

// 		circleCutout: {
// 			position: 'absolute',
// 			top: size / 3,
// 			right: - size / 5,

// 			width: size / 3,
// 			height: size / 2,
// 			borderRadius: 1000,
// 			backgroundColor: backgroundPurple,
// 			// backgroundColor: 'red',
// 		},

// 		circleCutout2: {
// 			position: 'absolute',
// 			bottom: 0,
// 			right: - size / 5,

// 			width: size / 2,
// 			height: size / 2,
// 			borderRadius: 1000,
// 			backgroundColor: backgroundPurple,
// 			// backgroundColor: 'green',
// 		},
// 	})

// 	return (
// 		<View style={logoStyles.background}>
// 			<View style={logoStyles.circleCutout}></View>
// 			<View style={logoStyles.circleCutout2}></View>
// 			<View style={logoStyles.orb}></View>
// 			<Text style={logoStyles.logo}>S</Text>
// 		</View>
// 	)
// }

// export default LoadingLogo


// import React, { useState, useEffect } from 'react';
// import { Animated, Text, View } from 'react-native';

// const FadeInView = (props) => {
//   const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

//   React.useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 5000,
//       }
//     ).start();
//   }, [])

//   return (
//     <Animated.View                 // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim,         // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }

// // You can then use your `FadeInView` in place of a `View` in your components:
// export default () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//       </FadeInView>
//     </View>
//   )
// }
