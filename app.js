import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { TabNavigator } from 'react-navigation'

import AddCardExample from './src/addCardExample'
import SelectPaymentExample from './src/selectPaymentExample'
import StripeAddCardExample from './src/stripeAddCardExample'

const Examples = TabNavigator({
  'Select Payment': {
    screen: SelectPaymentExample,
  },
  'Add Card': {
    screen: AddCardExample,
  },
  'Stripe Add Card': {
    screen: StripeAddCardExample,
  },
}, {
  lazy: true
})

AppRegistry.registerComponent('ReactNativeCheckoutExample', () => Examples)
