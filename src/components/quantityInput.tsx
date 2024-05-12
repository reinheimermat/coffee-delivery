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
    <div className="flex gap-1 rounded-md bg-baseButton px-2 py-2 hover:bg-baseHover">
      <button onClick={decrementQuantity}>
        <Minus className="size-4 text-purple" weight="bold" />
      </button>
      <span className="px-1">{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus className="size-4 text-purple" weight="bold" />
      </button>
    </div>
  )
}
