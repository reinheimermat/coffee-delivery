import { ShoppingCartSimple } from '@phosphor-icons/react'

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
  return (
    <div className="bg-baseCard flex max-w-64 flex-col items-center rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] px-6 pb-5 text-center">
      <img className="-mt-5 mb-4" src={coffee.image} alt={coffee.title} />

      <div>
        {coffee.tags.map((tag) => (
          <span
            className="bg-yellowLight text-yellowDark me-1 rounded-full p-2 text-xs font-bold uppercase"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-baseSubtitle font-title mb-2 mt-4 text-xl font-bold">
        {coffee.title}
      </h1>

      <h2 className="text-baseLabel mb-8 text-sm">{coffee.description}</h2>

      <div className="flex w-full items-center justify-between">
        <div>
          <span className="text-baseText me-1 text-sm">R$</span>
          <span className="font-title text-baseText text-2xl font-extrabold">
            {coffee.price.toFixed()}
          </span>
        </div>

        <div>
          {/* Input */}

          <button className="bg-purpleDark hover:bg-purple rounded-md p-2">
            <ShoppingCartSimple weight="fill" className="text-baseCard" />
          </button>
        </div>
      </div>
    </div>
  )
}
