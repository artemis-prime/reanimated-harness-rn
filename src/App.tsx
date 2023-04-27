import React from 'react'

import {
  SafeAreaView,
  View,
  Button,
  ViewStyle,
  ColorValue
} from 'react-native'

import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  Easing, 
  withTiming,
  interpolate,
  Extrapolation,  
  AnimateStyle,
} from 'react-native-reanimated'

import Ball2 from './Ball2'

const Ball: React.FC<{
  animatedStyles: AnimateStyle<ViewStyle>
  y: number,
  color: ColorValue
}> = ({ 
  animatedStyles,
  y,
  color
}) => (
  <Animated.View style={[{
    position: 'absolute',
    width: 50,
    height: 50,
    top: y,
    borderRadius: 25,
    backgroundColor: color
  }, animatedStyles]} />
)

const App: React.FC = () => {

      // 0 <--> 1: left <--> right 
    // Animated styles are interpolated as needed.
  const animationBase1 = useSharedValue<number>(0) 
  const animationBase2 = useSharedValue<number>(0) 
  const animationBase3 = useSharedValue<number>(0) 

  const animatedStyles1 = useAnimatedStyle(() => ({
    left: interpolate(
      animationBase1.value, 
      [0, 1], 
      [20, 200], 
      { extrapolateRight: Extrapolation.CLAMP }
    )
  }))

  const animatedStyles2 = useAnimatedStyle(() => ({
    left: interpolate(
      animationBase2.value, 
      [0, 1], 
      [20, 200], 
      { extrapolateRight: Extrapolation.CLAMP }
    )
  }))

  const animatedStyles3 = useAnimatedStyle(() => ({
    left: interpolate(
      animationBase3.value, 
      [0, 1], 
      [20, 200], 
      { extrapolateRight: Extrapolation.CLAMP }
    )
  }))


  const onClick1 = (): void => {
    animationBase1.value = withTiming(
      animationBase1.value > 0 ? 0 : 1, 
      {
        duration: 500,
        easing: animationBase1.value > 0 ? Easing.out(Easing.exp) : Easing.in(Easing.exp),
      }
    )
  }

  const onClick2 = (): void => {
    animationBase2.value = withTiming(
      animationBase2.value > 0 ? 0 : 1, 
      {
        duration: 500,
        easing: animationBase2.value > 0 ? Easing.out(Easing.exp) : Easing.in(Easing.exp),
      }
    )
  }

  const onClick3 = (): void => {
    animationBase3.value = withTiming(
      animationBase3.value > 0 ? 0 : 1, 
      {
        duration: 500,
        easing: animationBase3.value > 0 ? Easing.out(Easing.exp) : Easing.in(Easing.exp),
      }
    )
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
        aspectRatio: 1,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Animated.View style={[{
          position: 'absolute',
          width: 50,
          height: 50,
          top: 40,
          borderRadius: 25,
          backgroundColor: '#f22'
        }, animatedStyles1]} />
        <Ball y={120} color='#22f' animatedStyles={animatedStyles2} />
        <Ball2 y={200} color='#2f2'animatedStyles={animatedStyles3} />
      </View>
      <View style={{ 
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      }}>
        <Button onPress={onClick1} title="Inline (red)"/>
        <Button onPress={onClick2} title="Same File (blue)"/>
        <Button onPress={onClick3} title="imported (green)"/>
      </View>
    </SafeAreaView>
  )
}

export default App
