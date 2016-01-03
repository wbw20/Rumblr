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
  TouchableHighlight,
  Text,
  View,
  ListView
} = React;

var fights = [{
  name: 'Jamarkis Day',
  age: 29,
  profile: require('./assets/avatar.png')
}, {
  name: 'Patrick Sandwich',
  age: 91,
  profile: require('./assets/avatar.png')
}, {
  name: 'Dale Nogowski',
  age: 32,
  profile: require('./assets/avatar.png')
}, {
  name: 'Dill Mantrip',
  age: 15,
  profile: require('./assets/avatar.png')
}, {
  name: 'Clarence Shingle',
  age: 2,
  profile: require('./assets/avatar.png')
}, {
  name: 'Rilt Nabitsky',
  age: 44,
  profile: require('./assets/avatar.png')
}, {
  name: 'Jason Shane',
  age: 25,
  profile: require('./assets/avatar.png')
}];

var rumblr = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return {
      dataSource: ds.cloneWithRows(fights),
    };
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {

    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={rowData.profile} />
            <Text style={styles.text}>{rowData.name}</Text>
            <Text style={styles.text}>{rowData.age}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

AppRegistry.registerComponent('rumblr', () => rumblr);
