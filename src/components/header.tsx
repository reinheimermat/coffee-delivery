import Logo from '../../public/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  //   const { cart } = useCart()

  return (
    <header className="container mx-auto flex max-w-[70rem] items-center justify-between py-8">
      <a>
        <img src={Logo} alt="" />
      </a>

      <aside className="flex items-center gap-3">
        <div className="bg-purpleLight flex items-center gap-1 rounded-md p-2">
          <MapPin className="text-purple size-6" weight="fill" />
          <span className="text-purpleDark text-sm">Porto Alegre, RS</span>
        </div>

        <a className="bg-yellowLight text-yellowDark rounded-md p-2">
          <ShoppingCart className="size-6" weight="fill" />
          {/* {cart.length > 0 ? <span>{cart.length}</span> : null} */}
        </a>
      </aside>
    </header>
  )
}
