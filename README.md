# Space Explorer - Client

## Table of Contents
1. [The App](#the-app)
2. [Installation](#installation)
3. [Technologies used](#technologies-used)
4. [Purpose and other Features](#purpose-and-other-features)

## The App
This is the front-end app client for Space Explorer portfolio project. It is built on react-native primarily with x-code and tested to work on ios projects (iPhone SE and up).

The app will let you create and sign in with an account which you can then view SpaceX launch information available in the publically available [spaceX Api.](https://github.com/r-spacex/SpaceX-API). You can also "book" a fake trip on the mission, view your list of booked trips, or "cancel" your fake trip.

## Installation
Open the app on [react-native](https://facebook.github.io/react-native/) from the command line ex. `react-native run-ios --simulator="iPhone 11 Pro` or through xcode(iPhone)/androidstudio(android). This is only the client and for full functionality(sign up, login, etc...) you will need the server for the app obtainable [here.](https://github.com/JunCLi/space-explorer-server)

## Technologies Used

### Main Technologies
1. [React Native](https://facebook.github.io/react-native/) version 0.60.5
2. [GraphQL](https://graphql.org/)
3. [ApolloClient](https://www.apollographql.com/)
4. [Redux](https://github.com/reduxjs/react-redux)
5. [Postgres](https://www.postgresql.org/)
6. [React Native Elements](https://react-native-elements.github.io/react-native-elements/)

The full list of libraries used can be found in package.json. Formik, moment, react-navigation, react-native-vector-icons, etc...

## Purpose and other Features
My goal in this project was to better familiarize myself with react-native. To practice and experiment with different ways on how to organize my components, files, and styling.