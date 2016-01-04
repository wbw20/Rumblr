'use strict';

var React = require('react-native');

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
  name: 'Dill Mantrip',
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
      <View style={styles.container}>
        <Text style={styles.text} onPress={this.onClick}>
          Click Me
        </Text>
        <TextInput style={styles.search} placeholder='Search'/>
        <Text style={styles.title}>MESSAGES</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {

    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
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
  text: {
    marginTop: 100
  },
  container: {
    padding: 10,
  },
  search: {
    height: 40,
    borderColor: '#EDEDED',
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
    backgroundColor: '#EDEDED',
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
