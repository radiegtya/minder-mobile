import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Matches extends Component{

  render(){
    return (
      <View style={styles.container}>
        <Text>This is matches page</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

module.exports = Matches;
