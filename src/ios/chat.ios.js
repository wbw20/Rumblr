'use strict';

var React = require('react-native');

var {
  Text,
  Image,
  TouchableHighlight,
  View,
  StyleSheet,
} = React;

var Swipe = React.createClass({
  getInitialState: function() {
    return {};
  },

  _onClickBack: function() {
    this.props.navigator.jumpBack();
  },

  render: function() {
    return (
      <View style={styles.background}>
        <View style={styles.navBar}>
          <TouchableHighlight style={styles.navItem} onPress={this._onClickBack} underlayColor="transparent">
            <Image style={styles.back} source={require('../../assets/arrow.png')}/>
          </TouchableHighlight>
        </View>
        <View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Sup bro?</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>Dude I will mess u up</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Come do it bro</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>U rdy to fight bro?</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>ye</Text>
          </View>
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
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: 'EDEDED',
  },
  navItem: {
    height: 24,
    width: 26,
    alignSelf: 'flex-start',
  },
  back: {
    height: 24,
    width: 32,
  },
  from: {
    margin: 4,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 7,
    paddingLeft: 7,
    borderColor: 'EDEDED',
    backgroundColor: 'EDEDED',
    borderWidth: 1,
    borderRadius: 14,
    alignSelf: 'flex-start',
  },
  fromText: {

  },
  to: {
    margin: 4,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 7,
    paddingLeft: 7,
    borderColor: '007AFF',
    backgroundColor: '007AFF',
    borderWidth: 1,
    borderRadius: 14,
    alignSelf: 'flex-end',
  },
  toText: {
    color: 'white',
  }
});

module.exports = Swipe;
