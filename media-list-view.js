'user strict'

var React = require('react-native');

var {
  Text,
  View,
  TextInput,
  AlertIOS
} = React;
var TimerMixin = require('react-timer-mixin');

var styles = require('./styles');

var API_URL = 'https://itunes.apple.com/search';

var LOADING = {};

var resultsCache = {
  dataForQuery: {}
};

var SearchBar = React.createClass({
  render: function() {
    return (
      <View style={styles.listView.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search for media on iTunes..."
          returnKeyType="search"
          enabledReturnKeyAutomatically={true}
          style={styles.listView.searchBarInput}
          onEndEditing={this.props.onSearch}
        />
      </View>
    );
  }
});

var MediaListView = React.createClass({
  render: function() {
    return (
      <View style={styles.global.content}>
      <SearchBar
        onSearch={(event) => {
          var searchString = event.nativeEvent.text;

          AlertIOS.alert('Searching for', searchString)
        }}
      />
        <Text>
          YOLO
        </Text>
      </View>
    );
  }
});

module.exports = MediaListView;
