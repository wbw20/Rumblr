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
  ListView
} = React;

var fights = [{
  opponent: {
    name: 'Jamarkis Day',
    age: 29
  }
}];

var rumblr = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return {
      dataSource: ds.cloneWithRows(['Larry', 'Jamarkis', 'Will', 'Jason Muhlstein']),
    };
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
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
