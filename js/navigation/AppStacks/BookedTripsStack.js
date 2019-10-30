import { createStackNavigator } from 'react-navigation-stack'

import { backgroundColours, fontColours } from '../../stylesheets/colours'

import BookedTrips from '../../components/bookedTrips/BookedTrips'

const BookedTripsStack = createStackNavigator(
	{
		BookedTrips: {
			screen: BookedTrips,
			navigationOptions: () => ({
				title: 'Booked Trips',
			})
		},

		BookedTripDetails: {
			screen: BookedTrips
		},
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