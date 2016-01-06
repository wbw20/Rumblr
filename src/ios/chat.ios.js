'use strict';

var React = require('react-native');

var {
  Text,
  Image,
  TouchableHighlight,
  View,
  ScrollView,
  TextInput,
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
        <ScrollView style={styles.chatContainer}>
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
          <View style={styles.to}>
            <Text style={styles.toText}>Where we gunna throw down?</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Behind old man Stallman's</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Ya dig?</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Im gunna break ur face bro</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>yeah</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>I mean no</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>Your going down bro</Text>
          </View>
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
          <View style={styles.to}>
            <Text style={styles.toText}>Where we gunna throw down?</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Behind old man Stallman's</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Ya dig?</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Im gunna break ur face bro</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>yeah</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>I mean no</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>Your going down bro</Text>
          </View>
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
          <View style={styles.to}>
            <Text style={styles.toText}>Where we gunna throw down?</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Behind old man Stallman's</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Ya dig?</Text>
          </View>
          <View style={styles.from}>
            <Text style={styles.fromText}>Im gunna break ur face bro</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>yeah</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>I mean no</Text>
          </View>
          <View style={styles.to}>
            <Text style={styles.toText}>You're going down bro</Text>
          </View>
          <View  style={styles.spacer}></View>
        </ScrollView>
        <View style={styles.messageContainer}>
          <TextInput style={styles.message} placeholder='Talk some shit'/>
          <View style={styles.send}>
            <Text style={styles.sendButton}>Send</Text>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
  chatContainer: {
    paddingRight: 6,
    paddingLeft: 6,
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
  },
  messageContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 7,
    borderColor: 'D7D7D7',
    borderTopWidth: 1,
    backgroundColor: 'F7F7F7',
  },
  message: {
    flex: 1,
    height: 32,
    borderColor: 'D7D7D7',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  send: {
    width: 100,
    justifyContent: 'flex-end',
  },
  sendButton: {
    fontSize: 20,
    fontWeight: '400',
    color: '8E8E93',
    marginTop: 3,
    alignSelf: 'center'
  },
  spacer: {
    height: 52,
  }
});

module.exports = Swipe;
