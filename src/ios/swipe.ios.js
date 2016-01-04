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
  getInitialState: function() {
    return {
      x: 0,
      y: 0,
      rotate: 0
    };
  },

  _rotationStyle: function() {
    return {
      transform: [{
        translateX: this.state.x
      }, {
        translateX: this.state.y
      }, {
        rotate: this.state.rotate + 'deg'
      }]
    };
  },

  _onClickMessages: function() {
    this.props.navigator.push({
      name: 'Messages',
      component: Messages
    });
  },

  _animateSwipe: function(direction) {
    var timer = setInterval(() => {

      this.setState({
        x: this.state.x + (direction == 'right' ? 40 : -40),
        y: this.state.x + (direction == 'right' ? -5 : 5),
        rotate: this.state.rotate + (direction == 'right' ? 2 : -2)
      });

      if (Math.abs(this.state.x) > 700) {
        clearInterval(timer);
        this._resetSwipe();
      }

    }, 20);
  },

  _onClickPass: function() {
    this._animateSwipe('left');
  },

  _onClickFight: function() {
    this._animateSwipe('right');
  },

  _resetSwipe: function() {
    this.setState(this.getInitialState());
  },

  render: function() {
    return (
      <View style={styles.background}>
        <View style={styles.navBar}>
          <TouchableHighlight style={styles.navItem} onPress={this._onClickMessages} underlayColor="transparent">
            <Image style={styles.messages} source={require('../../assets/messages.png')}/>
          </TouchableHighlight>
        </View>
        <View style={[styles.swipeContainer, , this._rotationStyle()]}>
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
