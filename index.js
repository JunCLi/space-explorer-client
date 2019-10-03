/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import {name as appName} from './app.json';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger', 'Warning: componentWillMount is deprecated']);

AppRegistry.registerComponent(appName, () => App);
