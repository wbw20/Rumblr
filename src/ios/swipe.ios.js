'use strict';

var React = require('react-native');
var Messages = require('./messages.ios');

var {
  Text,
  Image,
  TouchableHighlight,
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
        <View style={styles.navBar}>
          <TouchableHighlight style={styles.navItem} onPress={this.onClick} underlayColor="transparent">
            <Image style={styles.messages} source={require('../../assets/messages.png')}/>
          </TouchableHighlight>
        </View>
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
  navBar: {
    marginTop: 26,
    marginBottom: 6,
    paddingRight: 12,
    paddingLeft: 12,
  },
  navItem: {
    height: 24,
    width: 26,
    alignSelf: 'flex-end',
  },
  messages: {
    height: 24,
    width: 26,
  }
});

module.exports = Swipe;
