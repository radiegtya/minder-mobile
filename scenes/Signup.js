import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import t from 'tcomb-form-native';
import {Actions} from 'react-native-router-flux';
import {Accounts} from 'react-native-meteor';

const Form = t.form.Form;

const Gender = t.enums.of(['M', 'F'], 'Gender');

// here we are: define your domain model
const SignUpForm = t.struct({
  email: t.String,
  password: t.String,
  firstName: t.String,
  lastName: t.String,
  gender: Gender,
});

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    },
    gender: {
      factory: t.form.Radio
    }
  }
};

class Signup extends Component{

  handleSignUp(){
    const value = this.refs.form.getValue();
    if(value){
        const {email, password, firstName, lastName, gender} = value;
        Accounts.createUser({
          email: email,
          password: password,
          profile: {
            firstName: firstName,
            lastName: lastName,
            gender: gender
          }
        }, (err)=>{
          if(err)
            alert(err.message);
          else{
              alert('sign up success, please sign in to continue.');
              Actions.Signin();
          }
        });
    }
  }

  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign Up</Text>
          </View>

          <Form
            ref="form"
            type={SignUpForm}
            options={options}
            />
          <TouchableHighlight style={styles.button} onPress={this.handleSignUp.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>

          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={()=>Actions.Signin()}>
              <Text style={styles.link}>Already have account? Sign In here.</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: 48
  },
  titleContainer: {
    alignSelf: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 30
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
  },
  linkContainer: {
    alignSelf: 'center',
    marginTop: 20
  },
  link: {
    fontSize: 12,
    color: "#4d97db",
  },
});

module.exports = Signup;
