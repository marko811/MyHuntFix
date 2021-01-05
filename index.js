import { AppRegistry, StatusBar } from 'react-native';

import Root from './src/app/main/Root';
StatusBar.setBarStyle('light-content')

AppRegistry.registerComponent('HuntApp', () => Root);
