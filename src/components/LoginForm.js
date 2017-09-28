import React, { Component } from 'react'
import { View } from 'react-native'
import Card from '../components/card'
import CardSection from '../components/cardSection'
import Button from '../components/button'

class LoginForm extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection />
          <CardSection />

          <CardSection>
            <Button text="Login" />
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default LoginForm;
