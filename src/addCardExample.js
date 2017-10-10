import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { AddCard } from 'react-native-checkout'

export default () => {
  return (
    <View style={{flex: 1}}>
      <AddCard
        addCardHandler={(cardNumber, cardExpiry, cardCvc) => {
          console.log(`${cardNumber} ${cardExpiry} ${cardCvc}`)
          return Promise.resolve(cardNumber) //return a promise when you're done
        }}
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
