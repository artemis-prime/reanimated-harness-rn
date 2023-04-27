import React from 'react'
import { Text } from 'react-native'
import { useUI } from './UIState'

import { observer } from 'mobx-react'

const Indicator: React.FC = observer(() => {

  const ui = useUI()
  return <Text style={{fontSize: 20}}>{`On ${ui.onLeft ? 'Left' : 'Right'}`}</Text>
})

export default Indicator
