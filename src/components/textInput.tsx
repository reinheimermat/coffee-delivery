import {
  forwardRef,
  useState,
  FocusEvent,
  InputHTMLAttributes,
  LegacyRef,
} from 'react'
import { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type textInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  error?: FieldError
  columns?: string
}

export const TextInput = forwardRef(function TextInput(
  { optional, columns, error, onFocus, onBlur, ...rest }: textInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(e: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(e)
  }

  function handleBlur(e: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(e)
  }

  return (
    <div
      className={twMerge(
        'w-full rounded-md border border-baseButton bg-baseInput',
        isFocused ? 'border border-yellowDark' : 'ring-baseButton',
        columns,
      )}
    >
      <label>
        <input
          type="text"
          className="border-none bg-transparent py-3 text-sm text-baseLabel placeholder:capitalize placeholder:text-baseLabel focus:ring-0"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />
        {optional ? (
          <span className="pr-3 text-xs italic text-baseLabel">Opcional</span>
        ) : null}
      </label>

      {error?.message ? (
        <span role="alert" className="px-1 text-xs text-red-600">
          {error.message}
        </span>
      ) : null}
    </div>
  )
})
