import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react'
import { QuantityInput } from './quantityInput'
import { useState } from 'react'
import { useCart } from '../hooks/useCart'

interface CardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItem } = useCart()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  return (
    <div className="flex max-w-64 flex-col items-center justify-between rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-baseCard px-6 pb-5 text-center">
      <img className="-mt-5 mb-4" src={coffee.image} alt={coffee.title} />

      <div>
        {coffee.tags.map((tag) => (
          <span
            className="me-1 rounded-full bg-yellowLight p-2 text-xs font-bold uppercase text-yellowDark"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="mb-2 mt-4 font-title text-xl font-bold text-baseSubtitle">
        {coffee.title}
      </h1>

      <h2 className="mb-8 text-sm text-baseLabel">{coffee.description}</h2>

      <div className="flex w-full items-center justify-between">
        <div>
          <span className="me-1 text-sm text-baseText">R$</span>
          <span className="font-title text-2xl font-extrabold text-baseText">
            {coffee.price.toFixed()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button
            className="rounded-md bg-purpleDark p-2 hover:bg-purple"
            onClick={handleAddItem}
            disabled={isItemAdded}
          >
            {isItemAdded ? (
              <CheckFat className="text-2xl text-baseCard" weight="fill" />
            ) : (
              <ShoppingCartSimple
                weight="fill"
                className="text-2xl text-baseCard"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
