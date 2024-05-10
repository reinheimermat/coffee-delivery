import { Header } from './components/header'
import { Outlet } from 'react-router-dom'
import { CartContextProvider } from './contexts/cartProvider'

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
    </CartContextProvider>
  )
}

export default App
