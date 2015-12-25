'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 4
  },
  cellImage: {
    height:80,
    width: 60,
    marginRight: 8,
    resizeMode: 'contain'
  }
});

var MediaCell = React.createClass({
  render: function() {
    return (
      <View>
        <TouchableHighlight
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onDeHighlight}
        >
          <View style={styles.cellContainer}>
            <Image
              source={{ uri: this.props.media.artworkUrl100 }}
              style={styles.cellImage}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  },
});

module.exports = MediaCell;
