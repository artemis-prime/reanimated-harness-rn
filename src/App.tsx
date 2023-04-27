import React, { useEffect } from 'react'
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native'

import Button from './primatives/Button'


const App: React.FC = () => {

  const onClick = (): void => {
    console.warn('CLICKED')
  }

  return (
    <SafeAreaView style={{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 12,
      paddingTop: 80
    }}>
      <View style={{
        height: 200,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}><Text style={{fontSize: 30}}> HELLO </Text></View>
      <View style={{ 
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Button onClick={onClick}>Click me</Button>
      </View>
    </SafeAreaView>
  )
}

export default App
