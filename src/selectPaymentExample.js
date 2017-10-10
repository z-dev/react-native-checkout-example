import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { SelectPayment } from 'react-native-checkout'

export default () => {
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <SelectPayment
        enableApplePay={true} // optional, default: false
        applePayHandler={() => console.log('apple pay happened')} // optional
        paymentSources={[
          {last4: '1234', brand: 'American Express', more: 'stuff' },
          {last4: '2345', brand: 'Visa', more: 'stuff' },
          {last4: '2345', brand: 'Master Card', more: 'stuff' },
        ]} // mandatory, See: [Customer Object](https://stripe.com/docs/api/node#customer_object) -> sources -> data for Stripe format.
        addCardHandler={() => console.log('Add Card Pressed!')}
        selectPaymentHandler={(paymentSource) => console.log(paymentSource)}
      />
    </View>
  )
}
