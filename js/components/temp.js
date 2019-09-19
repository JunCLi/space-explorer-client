import React from 'react'

import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StatusBar } from 'react-native'

import { Header, LearnMoreLinks, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

import { defaultStyles } from './tempStyles'

const Temp = props => {


	return (
		<>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={defaultStyles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={defaultStyles.engine}>
              <Text style={defaultStyles.footer}>Engine: Hermes</Text>
            </View>
					)}
          <View style={defaultStyles.body}>
            <View style={defaultStyles.sectionContainer}>
              <Text style={defaultStyles.sectionTitle}>Step One</Text>
              <Text style={defaultStyles.sectionDescription}>
                Edit <Text style={defaultStyles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={defaultStyles.sectionContainer}>
              <Text style={defaultStyles.sectionTitle}>See Your Changes</Text>
              <Text style={defaultStyles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={defaultStyles.sectionContainer}>
              <Text style={defaultStyles.sectionTitle}>Debug</Text>
              <Text style={defaultStyles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={defaultStyles.sectionContainer}>
              <Text style={defaultStyles.sectionTitle}>Learn More</Text>
              <Text style={defaultStyles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
		</>
	)
}



export default Temp