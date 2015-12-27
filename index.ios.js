/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var rumblr = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to Rumblr
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 100,
    width: 200
  }
});

AppRegistry.registerComponent('rumblr', () => rumblr);
