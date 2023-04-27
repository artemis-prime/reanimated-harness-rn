import React, { PropsWithChildren, useContext } from 'react'
import { makeAutoObservable } from 'mobx'


interface UIState {
  onLeft: boolean
  setOnLeft: (b: boolean) => void
}

class UIStateImpl implements UIState {

  onLeft: boolean = true

  constructor() {
    makeAutoObservable(this)
  }

  setOnLeft(b: boolean): void {
    this.onLeft = b
  }
}

const UIStateContext = React.createContext<UIState | undefined>(undefined)

const useUI = (): UIState => (
  useContext(UIStateContext) as UIState
)

const UIStateProvider: React.FC<PropsWithChildren> = ({
  children
}) => (
  <UIStateContext.Provider value={new UIStateImpl()}>
    {children}
  </UIStateContext.Provider>
)

export {
  UIStateProvider,
  useUI,
  type UIState
}
