import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import ilustracao from '../../public/ilustracao-entrega.png'
import { useCart } from '../hooks/useCart'
import { useParams } from 'react-router-dom'

export function Success() {
  const { orders } = useCart()
  const { orderId } = useParams<{ orderId: string }>()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo) {
    return null
  }

  return (
    <main className="container mx-auto mt-20 flex max-w-[70rem] items-end justify-between gap-8">
      <section>
        <h1 className="mb-1 font-title text-3xl font-extrabold text-yellowDark">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-xl text-baseSubtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="mt-10 flex flex-col gap-8 rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] p-10 text-baseText ring-1 ring-yellowDark">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-purple p-2 text-white">
              <MapPin className="size-4" weight="fill" />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {orderInfo.street}, {orderInfo.number}
                </strong>
              </p>
              <p>
                {orderInfo.neighborhood} - {orderInfo.state}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-yellow p-2 text-white">
              <Timer className="size-4" weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-yellowDark p-2 text-white">
              <CurrencyDollar className="size-4" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-lg">
        <img src={ilustracao} alt="Ilustração de um motoboy" />
      </section>
    </main>
  )
}
