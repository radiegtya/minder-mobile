import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NavigationBar from 'react-native-navbar';

class Matches extends Component{

  renderNavbar(){
    const titleConfig = {
      title: this.props.title,
      tintColor: '#FFF'
    };

    return (
      <NavigationBar
          title={titleConfig}
          tintColor={'#ef5475'}/>
    );
  }

  render(){
    return (
      <View style={styles.container}>
        {this.renderNavbar()}

        <Text>This is matches page</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = Matches;
