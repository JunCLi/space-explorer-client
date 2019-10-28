import { createStackNavigator } from 'react-navigation-stack'

import { background, font } from '../../stylesheets/colours'

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
				color: font.white,
				backgroundColor: background.darkerPurple,
			},
			headerTintColor: font.white,
			headerTitleStyle: {
				fontSize: 25,
				fontWeight: 'bold',
				marginBottom: 10,
			},
		}
	}
)

export default BookedTripsStack