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
  mixins: [TimerMixin],

  timeoutID: (null: any),

  _urlForQuery: function(query: string): string {
    if(query) {
      return API_URL + '?media=movie&term='+encodeURIComponent(query);
    } else {
      return API_URL + '?media=movie&term=mission+impossible';
    }
  },

  searchMedia: function(query: string) {
    this.timeoutID = null;

    var cachedResultsForQuery = resultsCache.dataForQuery[query];
    if(cachedResultsForQuery) {
      if(!LOADING[query]) {
        AlertIOS.alert('Numbers of results', cachedResults.dataForQuery.length + ' results');

        return cachedResultsForQuery;
      }
    } else {
      AlertIOS.alert('asd', 'f');
      LOADING[query] = true;
      resultsCache.dataForQuery[query] = null;

      fetch(this._urlForQuery(query))
        .then((response) => response.json())
        .catch((error) => {
          LOADING[query] = false;
          resultsCache.dataForQuery[query] = undefined;
        })
        .then((responseData) => {
          LOADING[query] = false;
          resultsCache.dataForQuery[query] = responseData.results;

          AlertIOS.alert('Numbers of results', responseData.resultCount + ' results');
        });
    }
  },

  render: function() {
    return (
      <View style={styles.global.content}>
      <SearchBar
        onSearch={(event) => {
          var searchString = event.nativeEvent.text;

          this.clearTimeout(this.timeoutID);
          this.timeoutID = this.setTimeout(() => this.searchMedia(searchString), 100);
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
