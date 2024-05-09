import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Trash,
} from '@phosphor-icons/react'
import { TextInput } from '../components/textInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCart } from '../hooks/useCart'
import { coffees } from '../../bd.json'
import { Radio } from '../components/radio'
import { Fragment } from 'react/jsx-runtime'
import { QuantityInput } from '../components/quantityInput'

interface FormInputs {
  cep: number
  street: string
  number: number
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number(),
  street: z.string(),
  number: z.number(),
  fullAddress: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Método de pagamento inválido',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Cart() {
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart()

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }

  return (
    <main className="container mx-auto flex max-w-[70rem] gap-8">
      <section>
        <h1 className="font-title text-lg font-bold text-baseSubtitle">
          Complete seu pedido
        </h1>

        <form
          className=""
          id="order"
          onSubmit={handleSubmit(handleOrderCheckout)}
        >
          <section className=" mb-5 rounded-md bg-baseCard p-10">
            <div className="flex gap-2">
              <MapPin size={24} className="text-yellowDark" />
              <div>
                <span className="text-baseTitle">Endereço de Entrega</span>
                <p className="text-sm text-baseSubtitle">
                  Informe o endereço onde deseja receber o seu pedido
                </p>
              </div>
            </div>
            <div className=" mt-8 grid grid-cols-3 gap-x-3 gap-y-4">
              <TextInput
                placeholder="CEP"
                type="number"
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
                columns="col-span-1"
              />
              <TextInput
                placeholder="Rua"
                error={errors.street}
                {...register('street')}
                columns="col-span-3"
              />
              <TextInput
                placeholder="Número"
                error={errors.number}
                {...register('number')}
                columns="col-span-1"
              />
              <TextInput
                placeholder="Complemento"
                optional
                error={errors.fullAddress}
                {...register('fullAddress')}
                columns="col-span-2"
              />
              <TextInput
                placeholder="Bairro"
                error={errors.neighborhood}
                {...register('neighborhood')}
                columns="col-span-1"
              />
              <TextInput
                placeholder="Cidade"
                error={errors.city}
                {...register('city')}
                columns="col-span-1"
              />
              <TextInput
                placeholder="UF"
                maxLength={2}
                error={errors.state}
                {...register('state')}
                columns="col-span-1"
              />
            </div>
          </section>

          <section className="rounded-md bg-baseCard p-10">
            <div className="flex gap-2">
              <CurrencyDollar size={24} className="text-purple" />

              <div className="mb-8">
                <span className="text-baseSubtitle">Pagamento</span>

                <p className="text-sm text-baseText">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div>
              <div className="flex gap-4">
                <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} className="text-purple" />
                  <span>Cartão de crédito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} className="text-purple" />
                  <span>Cartão de débito</span>
                </Radio>

                <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <CreditCard size={16} className="text-purple" />
                  <span>Dinheiro</span>
                </Radio>
              </div>
              {errors.paymentMethod ? (
                <p role="alert" className="bg-red-600 text-xs">
                  {errors.paymentMethod.message}
                </p>
              ) : null}
            </div>
          </section>
        </form>
      </section>
      <section>
        <h1 className="font-title text-lg font-bold text-baseSubtitle">
          Cafés selecionados
        </h1>

        <div>
          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <div className="flex">
                <div className="flex">
                  <img src={coffee.image} alt={coffee.title} />

                  <div className="flex">
                    <span>{coffee.title}</span>

                    <div>
                      <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantity={() => handleItemIncrement(coffee.id)}
                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                      />

                      <button onClick={() => handleItemRemove(coffee.id)}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                </div>

                <aside>R$ {coffee.price?.toFixed(2)}</aside>
              </div>

              <span />
            </Fragment>
          ))}

          <div>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </div>

          <button type="submit" form="order">
            Confirmar pedido
          </button>
        </div>
      </section>
    </main>
  )
}
