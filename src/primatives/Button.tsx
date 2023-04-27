import React, { PropsWithChildren, useEffect } from 'react'
import { 
  PressableProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native'

import ButtonShell, {type ButtonViewProps} from './ButtonShell'

const ButtonStateView: React.FC<ButtonViewProps> = ({
  state,
  children,
  style
}) => {

  useEffect(() => {
    console.log("VIEW: state is " + state)
  }, [state])

  return (
    <View style={[style, {
      backgroundColor: (state === 'disabled') ? '#aaa' : ((state === 'pressed') ? '#b66' : '#e66'), 
      borderRadius: 5,
      padding: 12
    }]}>
      <Text style={{
        fontSize: 20,
        color: 'black',
        textDecorationLine: (state === 'pressed') ? 'underline' : 'none'
      }}>{children}</Text>
    </View>
  ) 
}

const Button: React.FC<{
  onClick: () => void
  style?: StyleProp<ViewStyle>
} & PropsWithChildren & PressableProps> = ({
  children,
  onClick,
  style,
  ...rest
}) => (
  <ButtonShell {...rest} onClick={onClick} view={ButtonStateView} style={style}  >
    {children}
  </ButtonShell>
)

export default Button
