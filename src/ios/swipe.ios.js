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
  _onClickMessages: function() {
    this.props.navigator.push({
      name: 'Messages',
      component: Messages
    });
  },

  _onClickPass: function() {
    // TODO
  },

  _onClickFight: function() {
    // TODO
  },

  render: function() {
    return (
      <View style={styles.background}>
        <View style={styles.navBar}>
          <TouchableHighlight style={styles.navItem} onPress={this._onClickMessages} underlayColor="transparent">
            <Image style={styles.messages} source={require('../../assets/messages.png')}/>
          </TouchableHighlight>
        </View>
        <View style={styles.swipeContainer}>
          <Image style={styles.swipePhoto} source={require('../../assets/fuckboi.jpeg')}/>
          <Text style={styles.swipeName}>Jason, 14</Text>
          <Text style={styles.swipeLocation}>Chico, CA</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableHighlight style={styles.button} onPress={this._onClickPass}>
            <Text style={styles.pass}>PASS</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._onClickFight}>
            <Text style={styles.fight}>FIGHT</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
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
  },
  swipeContainer: {
    margin: 12,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 5,
    overflow: 'hidden',
  },
  swipePhoto: {
    flex: 1,
    alignSelf: 'center',
  },
  swipeName: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 5,
  },
  swipeLocation: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    margin: 10,
    flex: 1,
    borderWidth: 5,
    borderColor: '#EDEDED',
    borderRadius: 5,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  pass: {
    fontSize: 32,
    fontWeight: "500",
  },
  fight: {
    fontSize: 32,
    fontWeight: "500",
  }
});

module.exports = Swipe;
