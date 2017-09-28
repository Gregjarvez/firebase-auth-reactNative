import React from 'react'
import { View } from 'react-native'
import firebase from 'firebase';

import Header from './components/header'
import LoginForm from './components/LoginForm'

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBS-rUzWflVfdVOUkFTYfhNueumt8CLS3M',
      authDomain: 'auth-react-native-firebase.firebaseapp.com',
      databaseURL: 'https://auth-react-native-firebase.firebaseio.com',
      projectId: 'auth-react-native-firebase',
      storageBucket: 'auth-react-native-firebase.appspot.com',
      messagingSenderId: '1005793674316'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
