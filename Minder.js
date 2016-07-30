/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Signin from './scenes/Signin';
import Signup from './scenes/Signup';
import FindMatch from './scenes/FindMatch';
import Matches from './scenes/Matches';
import Settings from './scenes/Settings';
import Meteor from 'react-native-meteor';
import {Icon} from 'react-native-material-design';

Meteor.connect('ws://localhost:3000/websocket');

class TabIcon extends Component {
    render(){
      const title = this.props.title;
      let icon = "";

      if(title == "Find Match"){
        icon = "wifi-tethering";
      }else if(title == "Matches"){
        icon = "favorite";
      }else if(title == "Settings"){
        icon = "settings";
      }

        return (
            <Icon name={icon} color={this.props.selected ? 'red' :'black'}/>
        );
    }
}

class Minder extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="tabbar" tabs={true}>
            <Scene key="FindMatch" component={FindMatch} title="Find Match" icon={TabIcon} hideNavBar={true}/>
            <Scene key="Matches" component={Matches} title="Matches" icon={TabIcon} hideNavBar={true}/>
            <Scene key="Settings" component={Settings} title="Settings" icon={TabIcon} hideNavBar={true}/>
          </Scene>
          <Scene key="Signin" component={Signin} title="Minder"/>
          <Scene key="Signup" component={Signup} title="Minder"/>
        </Scene>
      </Router>
    );
  }
}

module.exports = Minder;
