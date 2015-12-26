'use strict';

var React = require('react-native');
var { StyleSheet} = React;

module.exports = StyleSheet.create({
  contentContainer: {
    padding: 8
  },
  mainSection: {
    flexDirection: 'row',
  },
  seperator: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: 1,
    marginVertical: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  mediaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mediaPriceRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iTunesButton: {
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 4,
    color: '#666',
    textAlign: 'center',
    borderColor: '#666',
    borderWidth: 1,
    padding: 8,
  },
  mediaPrice: {
    color: '#666',
    textAlign: 'right'
  }
});
