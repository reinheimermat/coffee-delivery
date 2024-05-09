import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { coffees } from '../../bd.json'
import { Card } from '../components/card'

export function Home() {
  return (
    <main>
      <section className="h-[34rem] bg-image bg-cover bg-no-repeat object-cover">
        <div className="container mx-auto max-w-[70rem]">
          <div className="flex items-center justify-between pt-24">
            <article className="max-w-[36.75rem]">
              <div className="mb-16">
                <h1 className="mb-4 font-title text-5xl font-extrabold text-baseTitle">
                  Encontre o café perfeito para qualquer hora do dia
                </h1>
                <span className="text-xl text-baseSubtitle">
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </span>
              </div>
              <div className="grid grid-cols-2 gap-y-5">
                <div className="col-span-1 flex items-center gap-3">
                  <ShoppingCart
                    size={32}
                    weight="fill"
                    className="size-8 rounded-full bg-yellowDark p-2 text-background"
                  />
                  <span className="text-baseText">Compra simples e segura</span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <Package
                    weight="fill"
                    className="size-8 rounded-full bg-baseText p-2 text-background"
                  />
                  <span className="text-baseText">
                    Embalagem mantém o café intacto
                  </span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <Timer
                    weight="fill"
                    className="size-8 rounded-full bg-yellow p-2 text-background"
                  />
                  <span className="text-baseText">
                    Entrega rápida e rastreada
                  </span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <Coffee
                    weight="fill"
                    className="size-8 rounded-full bg-purple p-2 text-background"
                  />
                  <span className="text-baseText">
                    O café chega fresquinho até você
                  </span>
                </div>
              </div>
            </article>
            <article className="">
              <img
                className="w-full object-cover"
                src="/cafe-grande.svg"
                alt="Café do Coffee Delivery"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-[70rem]">
        <h2 className="my-9 font-title text-4xl font-extrabold text-baseSubtitle">
          Nossos cafés
        </h2>

        <div className="mt-5 flex flex-wrap gap-8">
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </main>
  )
}
