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
        <View style={styles.mainSection}>
          <Image
            source={{uri: item.artworkUrl100 }}
            style={styles.mediaImage}
          />
          <View style={{flex: 1}}>
            <Text style={styles.mediaGenre}>{item.primaryGenreName}</Text>
            <Text style={styles.contentAdvisory}>{item.contentAdvisoryRating}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
});

module.exports = MediaDetailView;
