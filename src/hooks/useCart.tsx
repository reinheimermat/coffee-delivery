import { useContext } from 'react'

import { CartContext } from '../contexts/cartProvider'

export function useCart() {
  return useContext(CartContext)
}
