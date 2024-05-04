import { Minus, Plus } from '@phosphor-icons/react'

interface QuantityInputProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityInputProps) {
  return (
    <div className="bg-baseButton flex gap-1 rounded-md px-2 py-2">
      <button onClick={decrementQuantity}>
        <Minus className="text-purple size-4" weight="bold" />
      </button>
      <span>{quantity}</span>
      <button className="bg-baseButton text-purple" onClick={incrementQuantity}>
        <Plus className="size-4" weight="bold" />
      </button>
    </div>
  )
}
