import React from 'react'

import { UIStateProvider } from './UIState'
import Layout from './Layout'

const App: React.FC = () => (
  <UIStateProvider>
    <Layout />
  </UIStateProvider> 
)

export default App
