import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { StripeAddCard } from 'react-native-checkout'

export default () => {
  return (
    <View style={{flex: 1}}>
      <StripeAddCard
        publicStripeKey="123"
        addCardTokenHandler={(token) => console.log(token)}
        styles={{}} // Override default styles <LINK HERE>
        onCardNumberBlur={() => console.log('card number blurred')}
        onCardNumberFocus={() => console.log('card number focused')}
        onCvcFocus={() => console.log('cvc focused')}
        onCvcBlur={() => console.log('cvc blurred')}
        onExpiryFocus={() => console.log('expiry focused')}
        onExpiryBlur={() => console.log('expiry blurred')}
        onScanCardClose={() => console.log('scan card closed')}
        onScanCardOpen={() => console.log('scan card opened')}
        activityIndicatorColor="pink"
        addCardButtonText="Add Card"
        scanCardButtonText="Scan Card"
        scanCardAfterScanButtonText="Scan Card Again"
      />
    </View>
  )
}
