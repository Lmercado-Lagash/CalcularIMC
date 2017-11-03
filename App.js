import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, TouchableHighlight, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';

import Introduction from './src/components/Introduction';
import Calculate from './src/components/Calculate';
import Result from './src/components/Result';

const NavigationApp = StackNavigator({
  Introduction: {screen: Introduction},
  Calculate: {screen: Calculate},
  Result: {screen: Result},
});

export default class App extends React.Component {
  render() {
    return (
        <NavigationApp />
    );
  }
}
