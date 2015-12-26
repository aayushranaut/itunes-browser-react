'use strict'

var React = require('react-native');

var {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} = React;

var styles = require('./styles').detailView;

var MediaDetailView = React.createClass({
  render: function() {
    var item = this.props.mediaItem;

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.mediaTitle} numberOfLines={2}>
          {item.trackName}
        </Text>
      </ScrollView>
    );
  }
});

module.exports = MediaDetailView;
