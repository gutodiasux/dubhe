import { FormControl, FormLabel, Input, InputProps as ChakraInputProps } from '@chakra-ui/react'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import InputMask from 'react-input-mask'

type InputProps = ChakraInputProps & {
  name: string
  label?: string
  mask?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, mask, ...rest }: InputProps, ref) => {
  if (mask) {
    return (
      <FormControl>
        {!!label && <FormLabel
          htmlFor={name}
          color={'gray.200'}
          fontWeight={'normal'}
        >
          {label}
        </FormLabel>}
        <Input
          name={name}
          id={name}
          as={InputMask}
          mask={mask}
          backgroundColor={'gray.200'}
          focusBorderColor={'#F7F700'}
          ref={ref}
          {...rest}
        />
      </FormControl>
    )
  }

  return (
    <FormControl>
      {!!label && <FormLabel
        htmlFor={name}
        color={'gray.200'}
        fontWeight={'normal'}
      >
        {label}
      </FormLabel>}
      <Input
        name={name}
        id={name}
        backgroundColor={'gray.200'}
        focusBorderColor={'#F7F700'}
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
}

export const CustomInput = forwardRef(InputBase)