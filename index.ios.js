/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Image = React.Image;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var rumblr = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
        />
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
    width: 100
  }
});

AppRegistry.registerComponent('rumblr', () => rumblr);
