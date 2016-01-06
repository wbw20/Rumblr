'use strict';

var React = require('react-native');
var Chat = require('./chat.ios');

var {
  AppRegistry,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  TextInput,
  ListView
} = React;

var fights = [{
  name: 'Jamarkis Day',
  age: 29,
  profile: require('../../assets/avatar.png')
}, {
  name: 'Patrick Sandwich',
  age: 91,
  profile: require('../../assets/will.png')
}, {
  name: 'Dale Nogowski',
  age: 32,
  profile: require('../../assets/avatar.png')
}, {
  name: 'Golden Mantrip Tate',
  age: 15,
  profile: require('../../assets/avatar.png')
}, {
  name: 'Clarence Shingle',
  age: 2,
  profile: require('../../assets/jason.png')
}, {
  name: 'Rilt Nabitsky',
  age: 44,
  profile: require('../../assets/avatar.png')
}, {
  name: 'Jason Shane',
  age: 25,
  profile: require('../../assets/avatar.png')
}, {
  name: 'Jason Shane',
  age: 25,
  profile: require('../../assets/avatar.png')
}, {
  name: 'Jason Shane',
  age: 25,
  profile: require('../../assets/avatar.png')
}, {
  name: 'Jason Shane',
  age: 25,
  profile: require('../../assets/avatar.png')
}, {
  name: 'Jason Shane',
  age: 25,
  profile: require('../../assets/avatar.png')
}];

var Messages = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return {
      dataSource: ds.cloneWithRows(fights),
    };
  },

  onClick: function() {
    this.props.navigator.jumpBack();
  },

  render: function() {
    return (
      <View style={styles.background}>
        <View style={styles.navBar}>
          <TouchableHighlight style={styles.navItem} onPress={this.onClick} underlayColor="transparent">
            <Image style={styles.swipe} source={require('../../assets/fist.png')}/>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TextInput style={styles.search} placeholder='Search'/>
          <Text style={styles.title}>MESSAGES</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
        </View>
      </View>
    );
  },

  _onClickRow: function(rowId) {
    this.props.navigator.push({
      name: 'Chat',
      component: Chat
    });
  },

  _renderRow: function(rowData, sectionID, rowID) {

    return (
      <TouchableHighlight onPress={() => this._onClickRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={rowData.profile} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{rowData.name}</Text>
              <Text style={styles.message}>Sup bro?</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
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
  swipe: {
    height: 24,
    width: 26,
  },
  container: {
    padding: 10,
  },
  search: {
    height: 40,
    borderColor: 'EDEDED',
    borderWidth: 1,
    marginTop: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'EDEDED',
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  title: {
    flex: 1,
    fontWeight: '300',
    marginTop: 15,
    marginBottom: 15
  },
  name: {
    flex: 1,
    fontWeight: '500',
  },
  message: {
    flex: 1,
    fontWeight: '300',
  }
});

module.exports = Messages;
