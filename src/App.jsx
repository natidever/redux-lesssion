import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider  store={store}>
      <div>
        <CakeContainer/>
    </div>
    </Provider>

  )
}

export default App
