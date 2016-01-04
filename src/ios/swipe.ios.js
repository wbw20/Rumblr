'use strict';

var React = require('react-native');
var Messages = require('./messages.ios');

var {
  Text,
  View,
  StyleSheet,
} = React;

var Swipe = React.createClass({
  onClick: function() {
    this.props.navigator.push({
      name: 'Messages',
      component: Messages
    });
  },

  render: function() {
    return (
      <View>
        <Text style={styles.text} onPress={this.onClick}>
          Click Me
        </Text>
        <Text>Swipe</Text>
        <Text>Swipe</Text>
        <Text>Swipe</Text>
        <Text>Swipe</Text>
        <Text>Swipe</Text>
        <Text>Swipe</Text>
        <Text>Swipe</Text>
        <Text>Swipe</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  text: {
    marginTop: 100
  }
});

module.exports = Swipe;
