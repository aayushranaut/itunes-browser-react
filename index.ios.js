/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  StatusBarIOS,
  NavigatorIOS,
  AlertIOS
} = React;

var styles = require('./styles');

var MediaListView = require('./media-list-view');

StatusBarIOS.setStyle('light-content');

var iTunesBrowser = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.global.mainContainer}
        barTintColor="#2A3744"
        tintColor="#EFEFEF"
        titleTextColor="#EFEFEF"
        initialRoute={{
          component: MediaListView,
          title: 'iTunesBrowser',
          rightButtonTitle: 'Search',
          onRightButtonPress: () => AlertIOS.alert(
            'Search', 'Search button pressed'
          )
        }}
      />
    );
  }
});



AppRegistry.registerComponent('iTunesBrowser', () => iTunesBrowser);
