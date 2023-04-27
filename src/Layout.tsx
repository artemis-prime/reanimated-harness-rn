import React, { useState } from 'react'

import {
  SafeAreaView,
  View,
  Button,
  Text
} from 'react-native'

import  { 
  useSharedValue, 
  useAnimatedStyle, 
  Easing, 
  withTiming,
  interpolate,
  Extrapolation,  
  runOnJS,
} from 'react-native-reanimated'

import { useUI } from './UIState'
import Ball from './Ball'
import Indicator from './Indicator'

const Layout: React.FC = () => {

  const ui = useUI()
  const onLeftSV = useSharedValue<boolean>(ui.onLeft)
    // Timed differently.  True if we're at the left *edge*.
  const [onLeftReally, setOnLeftReally] = useState<boolean>(ui.onLeft) 

      // 0 <--> 1: left <--> right 
    // Animated styles are interpolated as needed.
  const animationBase = useSharedValue<number>(onLeftSV.value ? 0 : 1) 

  const preAnimation = () => {
    if (onLeftSV.value) {
      setOnLeftReally(false)   
    }
  }

  const postAnimation = (justOpened: boolean) => {
    onLeftSV.value = justOpened
    if (justOpened) {
      setOnLeftReally(true)   
    }
    ui.setOnLeft(justOpened)
  }

  const onClick = (): void => {
    preAnimation()
    animationBase.value = withTiming(
      onLeftSV.value ? 1 : 0, 
      {
        duration: 500,
        easing: Easing.out(Easing.exp),
      },
      () => {
        runOnJS(postAnimation)(!onLeftSV.value)
      }
    )
  }

  const animationStyles = useAnimatedStyle(() => ({
    left: interpolate(
      animationBase.value, 
      [0, 1], 
      [20, 200], 
      { extrapolateRight: Extrapolation.CLAMP }
    )
  }))

  return (
    <SafeAreaView style={{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 12,
      paddingTop: 80
    }}>
      <View style={{
        aspectRatio: 1,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Ball y={120} color='#22f' animatedStyles={animationStyles} />
      </View>
      <View style={{ 
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      }}>
        <Indicator />
        <Text>{`On Left Edge: ${onLeftReally}`}</Text>
        <Button onPress={onClick} title="nudge"/>
      </View>
    </SafeAreaView>
  )
}

export default Layout
