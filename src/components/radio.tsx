import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <label
      data-state={isSelected}
      className={twMerge(
        'flex w-full items-center gap-3 rounded-md border border-transparent bg-baseButton p-4 text-xs uppercase text-baseText transition-all duration-200 hover:bg-baseHover',
        isSelected && 'border-purple bg-purpleLight',
      )}
    >
      <input className="hidden" type="radio" ref={ref} {...rest} />
      {children}
    </label>
  )
})
