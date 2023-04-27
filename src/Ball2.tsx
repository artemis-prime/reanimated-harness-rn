import React from 'react'

import {
  ColorValue,
  ViewStyle
} from 'react-native'

import Animated, { AnimateStyle,} from 'react-native-reanimated'

const Ball2: React.FC<{
  animatedStyles: AnimateStyle<ViewStyle>
  color: ColorValue
  y: number
}> = ({ 
  animatedStyles,
  color,
  y
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

export default Ball2
