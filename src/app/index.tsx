import { Provider } from 'react-redux'

import { RouterProvider } from 'react-router-dom'

import { store } from './store'

import { router } from '../pages'
import './assets/styles/index.css'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
