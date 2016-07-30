import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import t from 'tcomb-form-native';
import {Actions} from 'react-native-router-flux';
import Meteor from 'react-native-meteor';

const Form = t.form.Form;

// here we are: define your domain model
const SignInForm = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

class Signin extends Component{

  handleSignIn(){
    const value = this.refs.form.getValue();
    if(value){
        const {email, password} = value;
        Meteor.loginWithPassword(email, password, (err)=>{
          if(err){
            alert(err.message);
          }else{
            Actions.tabbar();
          }
        });
    }
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign In</Text>
        </View>

        <Form
          ref="form"
          type={SignInForm}
          options={options}
          />
        <TouchableHighlight style={styles.button} onPress={this.handleSignIn.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>

        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={()=>Actions.Signup()}>
            <Text style={styles.link}>Don't have account? Sign Up here.</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    alignSelf: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 30
  },
  linkContainer: {
    alignSelf: 'center',
    marginTop: 20
  },
  link: {
    fontSize: 12,
    color: "#4d97db",
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#ef5475',
    borderColor: '#ef5475',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = Signin;
