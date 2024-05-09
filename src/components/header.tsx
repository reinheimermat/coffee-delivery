import Logo from '../../public/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useCart()

  return (
    <header className="container mx-auto flex max-w-[70rem] items-center justify-between py-8">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <aside className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-md bg-purpleLight p-2">
          <MapPin className="size-6 text-purple" weight="fill" />
          <span className="text-sm text-purpleDark">Porto Alegre, RS</span>
        </div>

        <Link
          to={`cart`}
          aria-disabled={cart.length === 0}
          className="relative rounded-md bg-yellowLight p-2 text-yellowDark"
        >
          <ShoppingCart className="size-6" weight="fill" />
          {cart.length > 0 ? (
            <span className="absolute right-0 top-0 -me-2 -mt-2 flex size-5 items-center justify-center rounded-full bg-yellowDark text-xs font-bold text-white">
              {cart.length}
            </span>
          ) : null}
        </Link>
      </aside>
    </header>
  )
}
