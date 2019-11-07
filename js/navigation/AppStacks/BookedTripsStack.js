import { createStackNavigator } from 'react-navigation-stack'

import { backgroundColours, fontColours } from '../../stylesheets/colours'

import BookedTrips from '../../screens/app/bookedTrips/BookedTrips'
import LaunchInfo from '../../screens/app/launchInfo/Launch'

const BookedTripsStack = createStackNavigator(
	{
		BookedTrips: {
			screen: BookedTrips,
			navigationOptions: () => ({
				title: 'Booked Trips',
			})
		},

		LaunchInfo: {
			screen: LaunchInfo,
			navigationOptions: ({ navigation }) => ({
				title: navigation.state.params.flightDetails.mission_name
			})
		}
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				color: fontColours.white,
				backgroundColor: backgroundColours.darkerPurple,
			},
			headerTintColor: fontColours.white,
			headerTitleStyle: {
				fontSize: 25,
				fontWeight: 'bold',
				marginBottom: 10,
			},
		}
	}
)

export default BookedTripsStack