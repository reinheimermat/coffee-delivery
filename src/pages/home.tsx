import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { coffees } from '../../bd.json'
import { Card } from '../components/card'

export function Home() {
  return (
    <main>
      <section className="bg-image h-[34rem] bg-cover bg-no-repeat object-cover">
        <div className="container mx-auto max-w-[70rem]">
          <div className="flex items-center justify-between pt-24">
            <article className="max-w-[36.75rem]">
              <div className="mb-16">
                <h1 className="text-baseTitle font-title mb-4 text-5xl font-extrabold">
                  Encontre o café perfeito para qualquer hora do dia
                </h1>
                <span className="text-baseSubtitle text-xl">
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </span>
              </div>
              <div className="grid grid-cols-2 gap-y-5">
                <div className="col-span-1 flex items-center gap-3">
                  <ShoppingCart
                    size={32}
                    weight="fill"
                    className="text-background bg-yellowDark size-8 rounded-full p-2"
                  />
                  <span className="text-baseText">Compra simples e segura</span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <Package
                    weight="fill"
                    className="text-background bg-baseText size-8 rounded-full p-2"
                  />
                  <span className="text-baseText">
                    Embalagem mantém o café intacto
                  </span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <Timer
                    weight="fill"
                    className="text-background bg-yellow size-8 rounded-full p-2"
                  />
                  <span className="text-baseText">
                    Entrega rápida e rastreada
                  </span>
                </div>
                <div className="col-span-1 flex items-center gap-3">
                  <Coffee
                    weight="fill"
                    className="text-background bg-purple size-8 rounded-full p-2"
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
        <h2 className="font-title text-baseSubtitle my-9 text-4xl font-extrabold">
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
