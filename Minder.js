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
import Meteor from 'react-native-meteor';

Meteor.connect('ws://localhost:3000/websocket');

class Minder extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Signin" component={Signin} title="Minder"/>
          <Scene key="Signup" component={Signup} title="Minder"/>
          <Scene key="FindMatch" component={FindMatch} title="Find Match"/>
        </Scene>
      </Router>
    );
  }
}

module.exports = Minder;
