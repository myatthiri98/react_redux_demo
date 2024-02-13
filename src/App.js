import React from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/iceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
    <div className='App'>
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      </div>
    </Provider>
  )
}

export default App