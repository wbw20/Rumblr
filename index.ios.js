'use strict';

var React = require('react-native');
var Messages = require('./src/ios/messages.ios');
var Swipe = require('./src/ios/swipe.ios');

var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var Rumblr = React.createClass({
  getInitialState: function() {
    return {
      openExternalExample: (null: ?React.Component),
    };
  },

  render: function() {
    return (
      <Navigator
        initialRoute={{ name: 'Rumblr', component: Swipe }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
      />
    );
  }
});

AppRegistry.registerComponent('rumblr', () => Rumblr);
