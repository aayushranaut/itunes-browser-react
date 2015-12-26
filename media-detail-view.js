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

    var buyPrice = (item.trackHdPrice && item.trackPrice) ?
      <View style={styles.mediaPriceRow}>
        <Text style={styles.sectionTitle}>Buy</Text>
        <Text style={styles.mediaPrice}>${item.trackHdPrice} (HD)</Text>
        <Text style={styles.mediaPrice}>${item.trackPrice} (SD)</Text>
      </View> : null;

    var rentalPrice = (item.trackHdRentalPrice && item.trackRentalPrice) ?
      <View style={styles.mediaPriceRow}>
        <Text style={styles.sectionTitle}>Rent</Text>
        <Text style={styles.mediaPrice}>${item.trackHdRentalPrice} (HD)</Text>
        <Text style={styles.mediaPrice}>${item.trackRentalPrice} (SD)</Text>
      </View> : null;

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
          <View style={styles.seperator} />
          {buyPrice}
          {rentalPrice}
        </View>
        <View style={styles.seperator} />
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.mediaDescription}>{item.longDescription}</Text>
      </ScrollView>
    );
  }
});

module.exports = MediaDetailView;
